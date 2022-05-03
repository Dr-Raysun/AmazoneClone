import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { db } from "../firebaseConfig";
import { getBasketTotal } from "./reducer";
import { PaystackButton } from "react-paystack";
import { PaystackConsumer } from "react-paystack";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const config = {
    reference: new Date().getTime().toString(),
    //email: "user@example.com",
    email: user?.email,
    amount: 20000,
    publicKey: "pk_test_eed0a81c992304fb1a643f5ac807089a6e148e78",
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handleSubmit = () => {};

  return (
    <PaymentCover>
      <PaymentContainer>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/** payment section for delivery address */}
        <PaymentSection>
          <PaymentTitle>
            <h3>Delivery Address</h3>
          </PaymentTitle>
          <PaymentAddress>
            <p>address {user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </PaymentAddress>
        </PaymentSection>
        {/** payment section for delivery address */}
        <PaymentSection>
          <PaymentTitle>
            <h3>Review items and delivery</h3>
          </PaymentTitle>
          <PaymentItem>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </PaymentItem>
        </PaymentSection>

        {/** payment section for delivery address */}
        <PaymentSection>
          <PaymentTitle>
            <h3>payment method</h3>
          </PaymentTitle>
          <PaymentDetails>
            {/** struoe magic will go here  */}
            <form onSubmit={handleSubmit}>
              {/** <CardElement onChange={handleChange} />   */}

              <PaymentpriceContainer>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                {/**
             *     <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
             */}
                <button>
                  <span>
                    <p>Processing</p> : "Buy Now"
                  </span>
                </button>
              </PaymentpriceContainer>

              {/* Errors */}
              {/** {error && <div>{error}</div>}    */}
            </form>
            <PaystackConsumer {...componentProps}>
              {({ initializePayment }) => (
                <button
                  onClick={() =>
                    initializePayment(
                      handlePaystackSuccessAction,
                      handlePaystackCloseAction
                    )
                  }
                >
                  pay now
                </button>
              )}
            </PaystackConsumer>
          </PaymentDetails>
        </PaymentSection>
      </PaymentContainer>
    </PaymentCover>
  );
};

export default Payment;
const PaymentCover = styled.div`
  border: 4px solid blue;
  background-color: white;
  h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
    a {
      text-decoration: none;
    }
  }
`;
const PaymentContainer = styled.div`
  border: 4px solid red;
`;
const PaymentSection = styled.div`
  border: 4px solid yellow;
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;
const PaymentTitle = styled.div`
  border: 4px solid blue;
  flex: 0.2;
`;
const PaymentAddress = styled.div`
  border: 4px solid blue;
  flex: 0.8;
`;
const PaymentItem = styled.div`
  border: 4px solid red;
  flex: 0.8;
`;

const PaymentDetails = styled.div`
  border: 4px solid yellow;
  flex: 0.8;
  form {
    max-width: 400px;
  }
  h3 {
    padding-bottom: 20px;
  }
`;
const PaymentpriceContainer = styled.div`
  border: 4px solid blue;
  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
