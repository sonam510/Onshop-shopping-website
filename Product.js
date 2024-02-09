import React from "react";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";
function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <Container>
      <ProductImage>
        <img src={image} alt="" />
      </ProductImage>
      <InfoText>
        <ProductPara>{title}</ProductPara>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </ProductRating>
        <ProductPrice>
          <small>₹</small>
          <strong>{price}</strong>
        </ProductPrice>
      </InfoText>

      <button onClick={addToBasket}>Add to Basket</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: all 0.3s ease-in;
  z-index: 5;
  &:hover {
    transform: scale(1.02);
  }
  button {
    background: #f0c14b;
    border: 1px solid;
    font-size: 1rem;
    border-radius: 1rem;
    font-weight: 500;
    width: 90%;
    position: relative;
    bottom: 1rem;
    margin: auto;
    height: 30px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
  }
`;

const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 100%;
  img {
    width: 100%;
    height: 160px;
    object-fit: contain;
  }
`;

const InfoText = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ProductPara = styled.p`
  font-size: 1.1rem;
  font-weight: 450;
`;

const ProductRating = styled.div`
  margin-top: 0.6rem;
  display: flex;
`;

const ProductPrice = styled.p`
  margin-top: 2px;

  small{
    font-size: 16px;
    margin-right: 4px;
    font-weight: 600;
  }
`;
export default Product;
