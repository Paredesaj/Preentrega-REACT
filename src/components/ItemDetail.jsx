import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useItem } from '../ItemContext';

const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const DetailImage = styled.img`
  max-width: 200px;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function ItemDetail() {
  const { selectedItem } = useItem();

  if (!selectedItem) {
    return <div>Cargando detalles...</div>;
  }

  return (
    <div>
      <h3>Detalle del Artículo</h3>
      <DetailContainer>
        <DetailImage src={selectedItem.image} alt={selectedItem.name} />
        <InfoContainer>
          <p>ID del artículo: {selectedItem.id}</p>
          <p>Talle: {selectedItem.size}</p>
          <p>Color: {selectedItem.color}</p>
          <p>Precio: {selectedItem.price}</p>
        </InfoContainer>
      </DetailContainer>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default ItemDetail;
