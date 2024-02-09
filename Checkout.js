import React from "react";
// import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
function Checkout() {
  const { user, isAuthenticated } = useAuth0();
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <Main>
        <ImageContainer>
          <img
            src="https://www.webfx.com/wp-content/uploads/2021/10/banner-ad-example-online.png"
            alt=""
          />
        </ImageContainer>
        <SubtotalContainer>
          <Subtotal />
        </SubtotalContainer>
      </Main>

      <CheckAuthenticate>
        {isAuthenticated ? (
          <h3>Hello :- {user.email}</h3>
        ) : (
          <h3>Hello,Guest</h3>
        )}
        <h2 className="checkout_title">Your shopping Basket</h2>
      </CheckAuthenticate>

      <CheckOutContainerProject>
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
      </CheckOutContainerProject>
      <SubBottom>
        <Subtotal />
      </SubBottom>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
  flex-direction: column;
  margin-left: auto;
  justify-content: center;
  margin-right: auto;
  max-width: 1450px;
`;

const Main = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 100%;
  flex: 0.7;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    flex: 1;
  }
`;

const SubtotalContainer = styled.div`
  flex: 0.3;
  margin-left: 0.6rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const SubBottom = styled.div`
  display: none;
  width: 90%;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

const CheckAuthenticate = styled.div`
  margin-bottom: 2rem;
   
  h3{
    margin-left: 16px;
  }
  h2{
    margin-left: 10px;
    padding: 10px;
    border-bottom: 2px solid lightgray;
  }
`;

const CheckOutContainerProject = styled.div`
margin-left: 1rem;
margin-right: 1rem;
`;
export default Checkout;
