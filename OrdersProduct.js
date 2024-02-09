import axios from "./axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function OrdersProduct() {
  const [{ address, user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .post("/orders/get", { email: user?.email })
      .then((res) => setOrders(res.data));
  });

  console.log(orders);
  return (
    <Container>
      <Main>
        <OrderContainer>
          <h2>Your Orders</h2>

          {orders.map((order) => (
            <OrderDetail>
              <PaymentSection>
                <h5>Shipping Address</h5>

                <PaymentAddress>
                  <p style={{ textTransform: "capitalize" }}>
                    {order.address.fullName}
                  </p>
                  <p style={{ textTransform: "capitalize" }}>{order.address.flat}</p>
                  <p style={{ textTransform: "capitalize" }}>{order.address.area}</p>
                  <p style={{ textTransform: "capitalize" }}>
                    {order.address.landmrk}
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    {order.address.city} {order.address.state}
                  </p>
                  <p>Phone: {order.address.phone}</p>
                </PaymentAddress>
              </PaymentSection>

              <OrderBasket>
                <h4>Orders</h4>
                <p>subtotal: ₹ {order.price}</p>
                {order.products.map((product) => (
                  <CheckoutProduct
                    title={product.title}
                    image={product.image}
                    price={product.price}
                  />
                ))}
              </OrderBasket>
            </OrderDetail>
          ))}
        </OrderContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1500px;

  margin: auto;
  background-color: rgb(234, 237, 237);
`;
const Main = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;
const OrderContainer = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 95%;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const OrderDetail = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 25px;
`;
const AddressComponent = styled.div`
  margin-top: 20px;

  div {
    font-size: 14px;
    margin-top: 4px;
  }
`;
const OrderBasket = styled.div`

margin-top: 20px;

p{
    font-size: 15px;
    margin-left: 15px;
    margin-top: 15px;
    font-size: 1.1rem;
    font-weight: 600;
}

span{
    font-weight: 600;
}
button{
  display: none;
}

}`;

const PaymentSection = styled.div`
  margin-top: 20px;
`;

const PaymentAddress = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  p {
    color: gray;
    margin: -0.1rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default OrdersProduct;
