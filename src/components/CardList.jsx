import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import {ItemListContainer} from './ItemListContainer'
import data from '../data/data.json';

const getImageForPerson = (person) => {
  const newImagen = data.find(dataimg => dataimg.id === person.id);
  return newImagen ? newImagen.imagen : person.image;
};

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

const MoreButton = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: lightblue;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  color: rgba(28, 28, 30, 1);
  border: none;

  &:hover .scroll-box {
    animation: scroll-down 3s infinite;
  }
`;

const ScrollBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
  }

  @keyframes scroll-down {
    0%, 100% {
      transform: translateY(0rem);
      opacity: 1;
    }

    35% {
      transform: translateY(1rem);
      opacity: 0;
    }

    70% {
      transform: translateY(-1rem);
      opacity: 0;
    }
  }
`;

export const CardList = ({ data, loading, addToCart }) => {
  const [visibleCount, setVisibleCount] = useState(4); 

  const showMoreCards = () => {
    setVisibleCount(prevCount => prevCount + 4); 
  };

  const visibleData = data.slice(0, visibleCount);

  return (
    <Container className="d-flex flex-wrap mt-3" style={{ justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <div></div>
      ) : (
        <>
          {visibleData.map(person => {
            const updatedPerson = {
              ...person,
              image: getImageForPerson(person)
            };
            return <ItemListContainer key={updatedPerson.id} person={updatedPerson} addToCart={addToCart} />;
          })}
          {visibleCount < data.length && (
            <MoreButtonContainer>
              <MoreButton onClick={showMoreCards}>
                <ScrollBox className="scroll-box">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)"></path>
                  </svg>
                </ScrollBox>
                Ver más
              </MoreButton>
            </MoreButtonContainer>
          )}
        </>
      )}
    </Container>
  );
};
