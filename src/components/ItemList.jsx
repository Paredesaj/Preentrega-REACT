import React from "react";
import { Item } from "./Item";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const ItemList = ({ items, visibleItems, handleShowMore }) => {
    return (
        <Container className='mt-4'>
            <Row>
                {items.slice(0, visibleItems).map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </Row>
            {visibleItems < items.length && (
                <div className="text-center mt-4">
                    <Button style={{ background: 'darkorange' }} onClick={handleShowMore} variant="secondary">
                        Ver más
                    </Button>
                </div>
            )}
        </Container>
    );
};
