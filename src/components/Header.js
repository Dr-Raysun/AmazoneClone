import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebaseConfig";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src="/images/amaImage.png" className="headerLogo" />
      </Link>

      {/* header search section */}
      <HeaderSearch>
        <HeaderSearchInput /> {/**header search field */}
        <HeaderSearchIcon /> {/*search icon here */}
      </HeaderSearch>

      <HeaderNav>
        <Link to={!user && "/login"}>
          <HeaderOption onClick={handleAuthentication}>
            <HeaderOptionLineOne>
              hello {!user ? "guest" : user.email}
            </HeaderOptionLineOne>
            <HeaderOptionLineTwo>
              {user ? "Sign Out" : "Sign In"}
            </HeaderOptionLineTwo>
          </HeaderOption>
        </Link>
        <HeaderOption>
          <HeaderOptionLineOne>Return</HeaderOptionLineOne>
          <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <HeaderOptionLineOne>yours</HeaderOptionLineOne>
          <HeaderOptionLineTwo>prime</HeaderOptionLineTwo>
        </HeaderOption>
        <Link to="/checkout">
          <HeaderOptionBasket>
            <ShoppingBasketIcon />
            <HeaderBasketCount>{basket?.length}</HeaderBasketCount>
          </HeaderOptionBasket>
        </Link>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  border: 4px solid green;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;
const HeaderLogo = styled.img`
  border: 4px solid red;
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;
const HeaderSearch = styled.div`
  border: 4px solid yellow;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

const HeaderSearchInput = styled.input`
border 4px solid gold;
 height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;
const HeaderSearchIcon = styled(SearchIcon)`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
`;
const HeaderNav = styled.div`
  border: 4px solid blue;
  display: flex;

  justify-content: space-evenly;
`;
const HeaderOption = styled.div`
border:4px solid red;
display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
}
`;
const HeaderOptionLineOne = styled.span`
  font-size: 10px;
`;
const HeaderOptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;
const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
const HeaderBasketCount = styled(HeaderOptionLineTwo)`
  border: 1px solid yellow;
  margin-left: 10px;
  margin-right: 10px;
`;
