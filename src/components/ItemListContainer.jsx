import Container from 'react-bootstrap/Container';
import data from "../data/data.json";
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    width: 100%; // Mismo ancho que ItemCount
    border: 2px solid #FF6F00; // Borde naranja
    border-radius: 12px; // Borde redondeado
    text-decoration: none; // Sin subrayado
    color: #FF6F00; // Color de texto naranja
    background-color: transparent; // Sin color de fondo

    &:hover {
        background-color: #FF8F00; // Cambio de color en hover
        color: white; // Color de texto blanco en hover
    }

    &:active {
        transform: scale(0.95); // Efecto de clic
    }
`;

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState(4);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(data), 2000))
            .then((response) => {
                if (!id) {
                    setItems(response);
                } else {
                    const filtered = response.filter((i) => i.category === id);
                    setItems(filtered);
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader />;

    const handleShowMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <Container className='mt-4'>
            <Row>
                {items.slice(0, visibleItems).map((i) => (
                    <Col key={i.id} md={3} className='mb-4'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={i.imagen} />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>{i.category}</Card.Text>
                                    <Card.Text>Size : {i.size}</Card.Text>
                                    <Card.Text>Precio : $ {i.price}</Card.Text>
                                </div>
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <Link to={`/item/${i.id}`} style={{ width: '100%' }}>
                                        <StyledButton variant="link">Ver</StyledButton>
                                    </Link>
                                    <ItemCount />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {visibleItems < items.length && (
                <div className="text-center mt-4">
                    <Button style={{background:'darkorange'}} onClick={handleShowMore} variant="secondary">Ver más</Button>
                </div>
            )}
        </Container>
    );
};
