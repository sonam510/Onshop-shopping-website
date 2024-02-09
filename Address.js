import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
function Address() {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const deliver = (e) => {
    e.preventDefault();
    if(fullName.length < 3 ||phone.length < 10||flat.length< 2||area.length <6 ||landmark.length< 4||city.length<2 || state.length<3){
      alert("Please fill the user details correctly");
      history.push("/address");
    }
    else{
      history.push("/payment");
    }
    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullName,
        phone,
        flat,
        area,
        landmark,
        city,
        state,
      },
    });
    
  };
  return (
    <Container>
      <div className="address_container">
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="John smith"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <InputContainer>
            <p>Flat,House no,Building,Company,Apartment</p>
            <input
              type="text"
              onChange={(e) => setFlat( e.target.value)}
              value={flat}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <InputContainer>
            <p>Area,Colony,Street</p>
            <input
              type="Area,Colony,Street,Sector,Village"
              onChange={(e) => setArea(e.target.value)}
              value={area}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <InputContainer>
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <InputContainer>
            <p>Town/City</p>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <InputContainer>
            <p>State</p>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
              required
              style={{textTransform: 'capitalize'}}
            />
          </InputContainer>
          <button onClick={deliver}>Deliver to this Address</button>
        </FormContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  background-color: rgb(234, 237, 237);
  position: relative;
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 60%;
  min-width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #ffe32a;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;
export default Address;
