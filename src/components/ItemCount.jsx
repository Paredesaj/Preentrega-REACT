import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const QuantityControls = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 50px;
  height: 50px; 
  border: none;
  background-color: #FF6F00;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => (props.roundLeft ? "5px 0 0 5px" : props.roundRight ? "0 5px 5px 0" : "0")};

  &:hover {
    background-color: #FF8F00;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ValueDisplay = styled.span`
  flex-grow: 1;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 2px solid #FF6F00;
  background-color: white;
  color: #FF6F00;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  border: 2.5px solid #E0E1E4;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
  cursor: pointer;
  background-color: #FF6F00;
  transition: all 0.2s ease-in-out;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
  overflow: hidden;

  &:hover .IconContainer {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: .5s;
  }

  &:hover .text {
    transform: translate(10px, 0px);
    transition-duration: .5s;
  }

  &:active {
    transform: scale(0.95);
    transition-duration: .5s;
  }
`;

const IconContainer = styled.span`
  position: absolute;
  left: 15px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .5s;
`;

const Text = styled.p`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  transition-duration: .5s;
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 40px;
  margin-top: 15px;
`;

const ItemCount = ({ setCartArticle }) => {
  const stock = 15;
  const [value, setValue] = useState(0);

  const handleRefAdd = () => {
    if (value < stock) {
      setValue(value + 1);
    }
  };

  const handleRefSubtract = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleAddToCart = () => {
    setCartArticle(value);
    setValue(0);
  };

  return (
    <Container>
      <QuantityControls>
        <Button onClick={handleRefSubtract} roundLeft>-</Button>
        <ValueDisplay>{value}</ValueDisplay>
        <Button onClick={handleRefAdd} roundRight>+</Button>
      </QuantityControls>
      <AddToCartButton onClick={handleAddToCart}>
        <IconContainer className="IconContainer">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="white">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
          </svg>
        </IconContainer>
        <Text className="text">AGREGAR</Text>
      </AddToCartButton>
    </Container>
  );
};

export default ItemCount;
