import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function Footer() {

  const history = useHistory();
  return (
    <Container>
      <Main>
        <FooterContent>
          <Footerlogo src="myfooterlogo.png" alt="" onClick={(e)=> history.push("/")}></Footerlogo>
          <AddressText>Main Mathura road sector -28</AddressText>
          <Link to="/">
            {" "}
            <InfoText>Onshop website</InfoText>
          </Link>
          <InfoText>Social Media Handles</InfoText>
          <InfoText>
            <SpanIcon style={{color: 'red'}}><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></SpanIcon>
            <SpanIcon><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></SpanIcon>
            <SpanIcon style={{color : "red"}}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></SpanIcon>
            <SpanIcon style={{color: "skyblue"}}><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></SpanIcon>
          </InfoText>
        </FooterContent>
        <FooterContent>
          <FooterHeading>Important Links</FooterHeading>
          <Link to="/checkout">
            <InfoText>CheckOut</InfoText>
          </Link>
          <Link to="/orders">
            <InfoText>Returns & Orders</InfoText>
          </Link>
          <InfoText>mypage7</InfoText>
        </FooterContent>
        <FooterContent>
          <FooterHeading>Important Links</FooterHeading>
          <InfoText onClick={(e) => history.push("/#36124567")}>Casio Watch</InfoText>
          <InfoText onClick={(e) => history.push()}>Marshall Acton</InfoText>
          <InfoText onClick={(e) => history.push()}>Echo Alexa</InfoText>
        </FooterContent>
        <FooterContent>
          <FooterHeading>Photos(Products)</FooterHeading>
          <ImportantProducts>
            <Photos>
              <img src="https://m.media-amazon.com/images/I/614-Fs0WgML._AC_UL480_FMwebp_QL65_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/61qXqGMlKVL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
            </Photos>
            <Photos>
              <img src="https://m.media-amazon.com/images/I/516LU0H963L._SX679_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/51DVNSbWIRL._UX679_.jpg" alt="" />
            </Photos>
          </ImportantProducts>
        </FooterContent>
      </Main>
      <FooterText>&#169; Copyright Onshop shopping website 2022</FooterText>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  color: white;
  background-color: #280476;

  *{
    padding: 0px;
    margin: 0px;
    scroll-behavior: smooth;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 1100px){
    flex-wrap: wrap;
  }
`;
const Footerlogo = styled.img`
 width: 170px;
 margin-bottom: 0.7rem;
`;

const FooterContent = styled.div`
  text-align: center;
  min-width: 300px;
  margin: 1rem;
  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 500px){
    margin-top: 3rem;
  }
`;
const Photos = styled.div`
cursor: pointer;
img {
    width: 80px;
    margin: 0.3rem;
    height: 70px;
  }
`;

const FooterHeading = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media screen and (max-width: 1100px){
    color: #cd9042;
  }
`;
const AddressText = styled.p``;
const ImportantProducts = styled.div`
 
`;

const SpanIcon = styled.span`
     font-size: 1.6rem;
     padding: 0.7rem;
`;
const InfoText = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover{
   padding: 0.2rem 1rem;
   font-weight: 600;
   transform: scale(1.1);
   color: #cd9042;
  }
`;

const FooterText = styled.p`
  padding: 20px;
  border-top: 2px solid white;
  text-align: center;
`;
export default Footer;
