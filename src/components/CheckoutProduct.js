import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ baskets }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //removing items from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <CheckoutProductWrap>
      <CheckoutProductImage src={image} />
      <CheckoutProductInfo>
        <CheckoutProductTitle>{title}</CheckoutProductTitle>
        <CheckoutProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </CheckoutProductPrice>
        <CheckoutProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </CheckoutProductRating>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </CheckoutProductInfo>
    </CheckoutProductWrap>
  );
}

export default CheckoutProduct;

const CheckoutProductWrap = styled.div`
  border: 4px solid red;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const CheckoutProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;
const CheckoutProductInfo = styled.div`
  border: 4px solid green;
  padding-left: 20px;
  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
const CheckoutProductTitle = styled.p`
  font-size: 17px;
  font-weight: 800;
`;

const CheckoutProductPrice = styled.p``;

const CheckoutProductRating = styled.p`
display: flex;
}`;
