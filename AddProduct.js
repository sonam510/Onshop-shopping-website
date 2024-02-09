import axios from "./axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
function AddProduct() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addProduct = (e) => {
    e.preventDefault();

    axios.post("/products/add", { title, imageURL, price, rating })
    .then((res) => {
        setTitle("");
        setImageURL("");
        setPrice(0);
        setRating(0);
        
        history.push("/");
       
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Logo>
        <img
          className="login_logo"
          src="christmas.png"
          alt=""

          onClick={(e)=> history.push("/")}
        />
      </Logo>

      <FormContainer>
        <h3>Add Product</h3>

        <InputContainer>
          <p>Text</p>
          <input
            type="text"
            placeholder="Enter image title"
           
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer>

        <InputContainer>
          <p>ImageURL</p>
          <input
            type="text"
            placeholder="Enter imageURL"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
          />
        </InputContainer>

        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>

        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </InputContainer>

        <Button onClick={addProduct}>Add Product</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 40px;
  align-items: center;
  height: fit-content;
  background-color: white;
`;

const Logo = styled.div`
  width: 180px;
  margin-bottom: 14px;
  cursor: pointer;
  img {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

`;

const FormContainer = styled.form`
  width: 400px;
  min-width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 20px;
  h3 {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 20px;
  }
`;

const InputContainer = styled.div`
 width: 100%;
 padding: 10px;

 p{
  font-size: 0.9rem;
  font-weight: 600;
 }
 input{
  height: 35px;
  margin-top: 8px;
  padding-left: 5px;
  border-radius: 5px;
  background-color: white;
  width: 95%;
  &:hover{
    border: 1px solid orange;
  }
  }
 }
`;

const Button = styled.button`
  background: #f0c14b;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 30px;
  width: 70%;
  height: 35px;
  cursor: pointer;
`;

export default AddProduct;
