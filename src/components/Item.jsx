import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    width: 100%;
    border: 2px solid #FF6F00;
    border-radius: 12px;
    text-decoration: none;
    color: #FF6F00;
    background-color: transparent;

    &:hover {
        background-color: #FF8F00;
        color: white;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Item = ({ item }) => {
    return (
        <Col key={item.id} md={3} className='mb-4'>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.category}</Card.Text>
                        <Card.Text>Size : {item.size}</Card.Text>
                        <Card.Text>Precio : $ {item.price}</Card.Text>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-3">
                        <Link to={`/item/${item.id}`} style={{ width: '100%' }}>
                            <StyledButton variant="link">Ver</StyledButton>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};
