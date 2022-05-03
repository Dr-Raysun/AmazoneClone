import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <SubtotalWrapper>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox" /> This order contains a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history("/payment")}>proceed to checkout</button>
    </SubtotalWrapper>
  );
}

export default Subtotal;
const SubtotalWrapper = styled.div`border 4px solid red;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;
height: 100px;
padding: 20px;
background-color: #f3f3f3;
border: 1px solid #dddddd;
border-radius: 3px;

button{ background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;}
`;
const SubtotalGift = styled.small`border 4px solid blue;
display: flex;
  align-items: center;
  input{ margin-right: 5px;}
  
`;
