import React from "react";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Container>
      <img className="checkoutProduct_image" src={image} alt="" />

      <InfoText>
        <Title>{title}</Title>

        <Price>
          <small>₹</small>
          <strong>{price}</strong>
        </Price>
        <CheckoutRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </CheckoutRating>

        <button onClick={removeFromBasket}>Remove</button>
      </InfoText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 20px;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  img {
    width: 180px;
    height: 180px;
    flex: 0.3;
    object-fit: contain;

    &:hover {
      transform: scale(0.9);
    }

    @media screen and (max-width: 400px){
      width: 130px;
      height: 130px;
    }
  }
`;

const InfoText = styled.div`
  flex: 0.7;
  padding-left: 1.5rem;

  button{
    background: #f0c14b;
    border: 1px solid;
    font-size: 1rem;
    border-radius: 1rem;
    font-weight: 500;
    width: 90px;
    margin-top: 10px;
    height: 30px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

const Price = styled.p`
  flex: 0.7;
  padding-top: 0.7rem;

  small{
    font-size: 16px;
    font-weight: 600;
    margin-right: 4px;
  }
`;

const CheckoutRating = styled.div`
  display: flex;
  margin-top: 6px;
  margin-right: 5px;

  small {
    font-size: 1rem;
    padding-right: 3px;
    font-weight: 600;
  }
`;
export default CheckoutProduct;
