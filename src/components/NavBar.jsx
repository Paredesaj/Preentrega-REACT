import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartWidget from './CartWidget';

const NavbarContainer = styled.nav`
  background-color: black;
  padding: .4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 400;
    color: orange;
    margin-left: 5px;
    span {
      font-weight: bold;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin-right: 2rem;
    font-size: 15px;
    font-family: Arial, sans-serif;
    text-transform: uppercase;

    &:hover {
      color: orange;
      text-decoration: underline;
    }
  }
`;

function NavBar({ cartArticle }) {
  return (
    <NavbarContainer>
      <h2><span>STADIUM</span> CALZADO</h2>
      <LinksContainer>
        <Link to="/">Home</Link>
        {/* <Link to="/cart">Cart</Link> */}
        <Link to="/quienes-somos">Quienes Somos</Link>
        <CartWidget cartArticle={cartArticle} />
      </LinksContainer>
    </NavbarContainer>
  );
}

export default NavBar;
