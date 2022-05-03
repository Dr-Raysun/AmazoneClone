import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //preventing refreshing of page
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
    // firebase occur here
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
    //do some firebase register here
  };

  return (
    <LoginWrap>
      <Link to="/">
        <LoginLogo src="/images/logoamazon.png" />
      </Link>
      <LoginContainer>
        <h1>sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginSignInbutton type="submit" onClick={signIn}>
            Sign In
          </LoginSignInbutton>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <LoginRegisterbutton onClick={register}>
          {" "}
          Create your Amazon Account
        </LoginRegisterbutton>
      </LoginContainer>
    </LoginWrap>
  );
}

export default Login;

const LoginWrap = styled.div`
  border: 4px solid blue;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginLogo = styled.img`
  border: 4px solid green;
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;
const LoginContainer = styled.div`
  border: 4px solid black;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
  p {
    margin-top: 15px;
    font-size: 12px;
  }
  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  form {
    h5 {
      margin-bottom: 5px;
    }
    input {
      height: 30px;
      margin-bottom: 10px;
      background-color: white;
      width: 98%;
    }
  }
`;
const LoginSignInbutton = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;
const LoginRegisterbutton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
`;
