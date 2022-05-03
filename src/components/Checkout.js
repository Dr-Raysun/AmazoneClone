import React from "react";
import styled from "styled-components";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <CheckoutWrapper>
      <CheckoutLeft>
        <CheckoutAd src="/images/checkoutBanner.jpg" />
        <div>
          <h3>Hello,{user.email}</h3>
          <CheckoutTitle>your shopping Basket</CheckoutTitle>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </CheckoutLeft>

      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </CheckoutWrapper>
  );
}

export default Checkout;

const CheckoutWrapper = styled.div`
  border: 4px solid blue;
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;

const CheckoutLeft = styled.div`
  border: 4px solid red;
`;

const CheckoutAd = styled.img`
  border: 4px solid green;
  width: 100%;
  margin-bottom: 10px;
`;
const CheckoutTitle = styled.h2`
  border: 4px solid gold;
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;
const CheckoutRight = styled.h2`
  border: 4px solid green;
`;
