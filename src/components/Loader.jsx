import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #ffffff; 
`;

const LoaderText = styled.span`
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFA500; 
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
  
  &::after {
    content: 'Loading';
    position: absolute;
    left: 0;
    top: 0;
    color: #FFA500; 
    text-shadow: 0 0 2px #FF4500, 0 0 1px #FF4500, 0 0 1px #FF4500; 
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    animation: animloader 1.5s linear infinite;
  }

  @keyframes animloader {
    0% {
      color: #ffffff;
    }
    100% {
      color: #FFA500;
    }
  }
`;

const Loader = () => (
  <LoaderContainer>
    <LoaderText>Loading</LoaderText>
  </LoaderContainer>
);

export default Loader;
