import React from 'react';
import styled from 'styled-components';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
            <NavContainer>
                <h2><span>STADIUM</span> CALZADO</h2>
                <LinksContainer>
                    <a href="/">Dama</a>
                    <a href="/">Caballero</a>
                    <a href="/">Niño</a>
                    <CartWidget />
                </LinksContainer>
            </NavContainer>
        </>
    );
}

export default NavBar;

const NavContainer = styled.nav`
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
        text-align: end;
        font-size: 15px;
        font-family: Arial black;
        text-transform: uppercase;
    }
    
    a:hover{
        pointer-events: all;
        color: orange;
        }
`;