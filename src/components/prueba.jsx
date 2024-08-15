import Container from 'react-bootstrap/Container';
import data from "../data/data.json"
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemListContainer = ({i, addToCart}) => {
    const { setSelectedItem } = useItem();

  const handleAddToCart = (quantity) => {
    addToCart(person, quantity);
  };

  const handleMoreClick = () => {
    setSelectedItem(person);
  };
const [item, setItem] = useState([])
const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(resolve(data), 2000)).then(
      (response) => setItem(response)
    ).finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return <Container className='mt-4 d-flex'>{item.map((i) => (
    <Card key={i.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.imagen} />
      <Card.Body>
        <Card.Title>{i.Title}</Card.Title>
        <Card.Text>
          {i.category}
        </Card.Text>
        <Card.Text>
          {i.size}
        </Card.Text>
        <Card.Text>
          Precio : $ {i.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>))}</Container>;
};
