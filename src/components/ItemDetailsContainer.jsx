import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from "../data/data.json"
import Loader from './Loader';

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
        <h1>{item.title}</h1>
        <img src={item.imagen} height={500}/>
        <h2>{item.category}</h2>
        <h3>Size: {item.size}</h3>
        <h3>Price: ${item.price}</h3>
    </Container>
    );
}

