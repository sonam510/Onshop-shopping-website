import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "./axios";
function SignUp() {
  const history = useHistory();
  // const [error,setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post("/register", user).then((res) => {
        alert(res.data.message);
        if (res.data.message === "User already registered") {
          alert("Go to login page");
          history.push("/login");
        } 
        else {
          history.push("/signup");
        }
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <Container>
      {/* {console.log("user",user)} */}
      <Logo onClick={(e) => history.push("/")}>
        <img
          className="login_logo"
          src="christmas.png"
          alt=""
        />
      </Logo>

      <FormContainer>
        <h3>Sign Up</h3>

        <InputContainer>
          <p>FullName </p>
          <input
            type="text"
            value={user.name}
            name="name"
            placeholder="UserName"
            onChange={handleChange}
          />
          {/* <label>Please give the valid user name</label> */}
        </InputContainer>

        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            value={user.email}
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          {/* <label>Please Enter Valid email Id</label> */}
        </InputContainer>

        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            value={user.password}
            name="password"
            placeholder="*******"
            onChange={handleChange}
          />
          {/* <label>Please Enter valid password</label> */}
        </InputContainer>

        <SignUpButton type="submit" onClick={register}>
          Create your amazon account
        </SignUpButton>

        <InfoText>
          By continuing in you agree to the onshop <span>conditions </span>
          of use and <span>Privacy Notice.</span>
        </InfoText>
      </FormContainer>

      <LoginButton onClick={(e) => history.push("/login")}>
        Back To LogIn
      </LoginButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  height: 108vh;
  background-color: white;

  @media screen and (max-width: 500px){
    height: fit-content;
  }
`;

const Logo = styled.div`
  width: 170px;
  margin-bottom: 20px;
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
    line-height: 20px;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 600px){
    width: 90%;
  }
`;

const InputContainer = styled.div`
 width: 100%;
 padding: 4px;

 p{
  font-size: 0.9rem;
  font-weight: 600;
 }
 input{
  height: 35px;
  margin-top: 4px;
  padding-left: 5px;
  border-radius: 5px;
  background-color: white;
  width: 95%;
  &:hover{
    border: 1px solid orange;
  }
  }
  label{
     font-size: 0.9rem;
     color: red;
     margin-top: 0.3rem;
     margin-bottom: 0.3rem;
  }
 }
`;

const SignUpButton = styled.button`
  margin-top: 20px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  width: 97%;
  border-radius: 3px;
  &:hover {
    background-color: #dfdfdf;
    border-radius: 1px solid gray;
  }
`;

const LoginButton = styled.button`
  background: #f0c14b;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 30px;
  width: 350px;
  height: 35px;
  @media screen and (max-width:  500px){
    width: 80%;
    height: fit-content;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 15px;
  span {
    color: #426bc0;
  }
`;
export default SignUp;
