import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <SubTotal>
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

      <button onClick={(e) => history.push("/address")}>
        Proceed to checkout
      </button>
    </SubTotal>
  );
}

const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
  padding: 20px;
  background-color: #f3f3f3;
  border: 2px solid #dddddd;
  border-radius: 4px;

  small {
    display: flex;
    align-items: center;

    input {
      margin-right: 6px;
    }
  }

  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    .subtotal {
      margin: auto;
      width: 90%;
    }
  }
`;

export default Subtotal;


