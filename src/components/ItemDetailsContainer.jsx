import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from "../data/data.json"
import Loader from './Loader';
import { Link } from 'react-router-dom/dist';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(data), 2000))
            .then((response) => {
                const finded = response.find((i) => i.id === Number(id));
                setItem(finded);
            })
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) return <Loader />;

    return(
    <Container className='mt-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img src={item.imagen}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{item.category}</ListGroup.Item>
        <ListGroup.Item>Size: {item.size}</ListGroup.Item>
        <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link><Link to="/" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>Home</Link></Card.Link>
      </Card.Body>
    </Card>
    </Container>
    );
}

