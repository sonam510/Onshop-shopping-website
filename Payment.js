import React, { useEffect,useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import styled from "styled-components";
 import { useHistory } from "react-router-dom";
import axios from "./axios";
function Payment() {
   const history = useHistory();
  //  const { user, isAuthenticated } = useAuth0();
  const [{ basket, address,user},dispatch] = useStateValue();
  const [clientSecret, setclientSecret] = useState('');
  const elements = useElements();
  const stripe = useStripe();
   
  useEffect(() => {
    
   const fetchClientSecret = async () => {
      const data = await axios.post("/payment/create", {
         amount: getBasketTotal(basket),
      });

      setclientSecret(data.data.clientSecret);
   };

   fetchClientSecret();
   console.log('clinetSecret is >>>>>>>>', clientSecret)
  },[]);



  const confirmPayment = async (e) => {
   e.preventDefault();
   
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
         card: elements.getElement(CardElement)
        }
      })
      .then((result) => {
   
       axios.post('/orders/add',{
         basket: basket,
         price: getBasketTotal(basket),
         email: user?.email,
         address: address,
       });
   
       dispatch({
         type: 'EMPTY_BASKET'
       })
       history.push("/");
      })
      .catch((err) => console.warn(err));
   
  };
  return (
    <Container>
      <Main>
        <PaymentReview>
          <h2>Review Your Order</h2>

          <PaymentSection>
            <h5>Shipping Address</h5>

        <PaymentAddress>
              <p   style={{textTransform: 'capitalize'}}>{address.fullName}</p>
              <p   style={{textTransform: 'capitalize'}}>{address.flat}</p>
              <p   style={{textTransform: 'capitalize'}}>{address.area}</p>
              <p   style={{textTransform: 'capitalize'}}>{address.landmrk}</p>
              <p   style={{textTransform: 'capitalize'}}>
                {address.city} {address.state}
              </p>
              <p>Phone: {address.phone}</p>
            </PaymentAddress>
          </PaymentSection>

          <PaymentMethod>
            <h5>Payment Method</h5>
            <div>
              <p>Card Details</p>

              <CardElement />
            </div>
          </PaymentMethod>

          <PaymentItems>
            <h5>Your Order ({basket?.length})</h5>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
               price={item.price}
                rating={item.rating}
              />
            ))}
          </PaymentItems>
        </PaymentReview>

        <PaymentSubTotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>

                <small className="subtotal_gift">
                  <input type="checkbox" />
                  This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />

          <button className="payment_btn" onClick={confirmPayment}>Place Order</button>
        </PaymentSubTotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(234, 237, 237);
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: fit-content;
  max-width: 1500px;
  border-left: 2px solid black;
  border-right: 2px solid black;
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`;

const PaymentReview = styled.div`
  background-color: #fff;
  flex: 0.7;
  margin-bottom: 1.5rem;
  padding: 15px;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
  h5 {
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1000px){
    flex: 1;
  }
`;

const PaymentSection = styled.div`
  margin-top: 20px;
`;

const PaymentAddress = styled.div`
  margin-top: 10px;
  margin-left: 10px;

  p {
    color: gray;
    font-size: 0.9rem;
  }
`;
const PaymentMethod = styled.div`
  margin-top: 15px;

  div {
    margin-left: 15px;
    margin-top: 15px;

    p {
      color: gray;
      margin-bottom: 0.7rem;
      font-size: 14px;
    }
  }
`;

const PaymentSubTotal = styled.div`
  flex: 0.3;
  background-color: red;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 2px solid #dddddd;
  border-radius: 4px;
    

@media screen and (max-width: 1000px){
 height: fit-content;
 width: 94%;
 margin: auto;
}
  small{
    display: flex;
    align-items: center;

    input{
      margin-top: 0.5rem;
      margin-right: 6px;

      @media screen and (max-width: 1000px){
        margin-top: 0.7rem;
      }
    }
  }

  button{
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;

    @media screen and (max-width: 1000px) {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 1000px) {
  height: fit-content;
    width: 94%;
    margin: auto;
  }
`;
const PaymentItems = styled.div`
margin-top: 30px;
`;
export default Payment;
//  {/* <h1>
// /           Checkout {
// //             <Link to="/checkout">({basket?.length} items)</Link>
// /           }
// /         </h1> */}        {/*payment section:- delivery address*/}
// //         {/* <div className="payment_title">
// //             <h3>Review Item and Delievery</h3>
// //           </div> */}
// //         {/*payment section:- Review Items*/}

// //         {/*payment section:- Payment method*/}
