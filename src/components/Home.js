import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Home() {
  return (
    <HomePage>
      <HomeContainer>
        <HomeImage src="/images/toyGames.jpg" />

        <HomeRow>
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={1}
            image="images/goods-6.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="/images/goods-1.jpg"
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="/images/goods-2.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="/images/goods-3.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="/images/goods-4.jpg"
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="/images/goods-5.jpg"
          />
        </HomeRow>
      </HomeContainer>
    </HomePage>
  );
}

export default Home;

const HomePage = styled.div`
  border: 4px solid red;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;
const HomeContainer = styled.div`
  border: 4px solid blue;
`;
const HomeImage = styled.img`
  border: 4px solid green;
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const HomeRow = styled.div`
  border: 4px solid gold;
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
