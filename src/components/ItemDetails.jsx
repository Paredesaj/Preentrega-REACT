import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

export const ItemDetails = ({ item, onAdd }) => {
    if (!item) {
        return <p>No hay información para mostrar.</p>;
    }

    return (
        <Container className='mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={item.imagen} alt={item.title} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.category}</ListGroup.Item>
                    <ListGroup.Item>Size: {item.size}</ListGroup.Item>
                    <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
                    <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </ListGroup>
                <Card.Body>
                    <Card.Link>
                        <Link to="/" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>
                            Home
                        </Link>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
}
