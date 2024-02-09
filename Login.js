import React, { useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import axios from "./axios";

function Login() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [user, setUser] = useState({
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

  const login = (e) => {
    e.preventDefault();
    axios.post("/login", user).then((res) => {
      alert(res.data.message);
      // setLoginUser(res.data.user);
      if (res.data.message === "Password did,t match") {
        history.push("/login");
      } else if (res.data.message === "User not registered") {
        alert("please go to signup");
        history.push("/signup");
      } else {
        history.push("/");
      }
    });
  };

  return (
    // <div className="login">
   
    <Container>
      <Logo onClick={(e) => history.push("/")}>
        <img
          className="login_logo"
          src="christmas.png"
          alt=""
        />
      </Logo>

      <FormContainer>
        <h3>Sign in</h3>

        <InputContainer>
          <p>E-mail:</p>
          <input
            type="email"
            value={user.email}
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          {/* {error?<label>Email can't be empty</label>:""} */}
          
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
          {/* {error?<label>password can't be empty</label>:""} */}
        </InputContainer>

        <LoginButton type="submit" onClick={login}>
          Log In
        </LoginButton>

        <InfoText>
          By continuing in you agree to the onshop <span>conditions </span>
          of use and <span>Privacy Notice.</span>
        </InfoText>
      </FormContainer>

      <SignUpButton onClick={(e) => history.push("/signup")}>
        Create your amazon account
      </SignUpButton>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  height: 100vh;
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
    line-height: 33px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px){
    width: 90%;
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

const LoginButton = styled.button`
  background: #f0c14b;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 30px;
  width: 80%;
  padding: 0.3rem 3rem;
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

const SignUpButton = styled.button`
  border: 1px solid;
  background-color: lightgray;
  margin-top: 20px;
  width: 350px;
  height: 35px;
  border-radius: 3px;

  &:hover {
    background-color: #dfdfdf;
    border-radius: 1px solid gray;
  }
  @media screen and (max-width:  500px){
    width: 80%;
    height: fit-content;
  }
`;
export default Login;
