import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useItem } from '../ItemContext';

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 5px; 
`;

const ZoomImage = styled(Card.Img)`
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const MoreButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  color: white;
  background-color: orange;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: darkorange;
  }
`;

function CardStyle({ person, addToCart }) {
  const { setSelectedItem } = useItem();

  const handleAddToCart = (quantity) => {
    addToCart(person, quantity);
  };

  const handleMoreClick = () => {
    setSelectedItem(person);
  };

  return (
    <Card style={{ width: '19rem', padding: '0.5rem', margin: '0.4rem 0.4rem' }}>
      <ImageContainer>
        <ZoomImage variant="top" src={person.image} alt={person.name} />
      </ImageContainer>
      <Card.Body>
        <Card.Title>Modelo {person.id}</Card.Title>
        <Card.Text>
          Precio: {person.price}
        </Card.Text>
        <ItemCount setCartArticle={handleAddToCart} />
        <MoreButton to={`/detail/${person.id}`} onClick={handleMoreClick}>Ver más</MoreButton>
      </Card.Body>
    </Card>
  );
}

export default CardStyle;
