const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./Products");
const Orders = require("./Orders");
const stripe = require("stripe")(
  "sk_test_51MCmygSAWc9nxuIsJ9wIWHA7Ci2N2bqoZ7oxCLaOTyiPmJhGUlRyjLlKYwagUa5hMNl5URmeHOaqmrTNiSHpBnLz00gaZ50B0U"
);
const app = express();
const port = 8000;

//Middlewares
app.use(express.json());
app.use(cors());

// connection utl
const connection_url =
  "mongodb+srv://shivam1:shivam12@cluster0.rhniwp1.mongodb.net/myonshop?retryWrites=true&w=majority";

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000,
  })
  .then(() => console.log("connection established"))
  .catch((err) => console.log("failed"));

//simple API
app.get("/", (req, res) => res.status(200).send("Hello"));

//add product

app.post("/products/add", (req, res) => {
  const productDetail = req.body;

  // console.log("product Detail >>>>> ", productDetail);

  Products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/get", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//API Payment
app.post("/payment/create", async (req, res) => {
  const total = req.body.amount;
  console.log("Payment Request Recieved for this rupees", total);

  const payment = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: payment.client_secret,
  });
});

// API To add ORDER DETAILS

app.post("/orders/add", (req, res) => {
  const products = req.body.basket;
  const price = req.body.price;
  const email = req.body.email;
  const address = req.body.address;

  const orderDetail = {
    products: products,
    price: price,
    address: address,
    email: email,
  };

  Orders.create(orderDetail, (err, result) => {
    if (err) {
      //   res.status(500).send(err.message);
      console.log(err);
    } else {
      //   res.status(201).send(data);
      console.log("Order added to database >> ", result);
    }
  });
});

app.post("/orders/get", (req, res) => {
  const email = req.body.email;

  Orders.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      const userOrders = result.filter((order) => order.email === email);
      res.send(userOrders);
    }
  });
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully registerd" });
        }
      });
    }
  });

});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Succcessful", user: user });
      } else {
        res.send({ message: "Password did,t match" });
      }
    } else {
      res.send({message: "User not registered"});
    }
  });
});

app.listen(port, () => console.log(`listening on the port ${port}`));
