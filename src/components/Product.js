import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is basket", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <ProductContainer>
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </ProductRating>
      </ProductInfo>
      <img src={image} alt="good pics" />
      <button onClick={addToBasket}>Add to Basket</button>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.div`
border 4px solid red;
display:flex;
flex-direction:column;
align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
img{
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
    };
    button {
        background: #f0c14b;
        border: 1px solid;
       margin-top: 10px;
       border-color: #a88734 #9c7e31 #846a29;
       color: #111;
    }
`;
const ProductInfo = styled.div`
border 4px solid blue;
height: 100px;
margin-bottom: 15px;
`;
const ProductRating = styled.div`
border 4px solid yellow;
display:flex;
`;
const ProductPrice = styled.p`
border 4px solid brown;
margin-top: 5px;
`;
