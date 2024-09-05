import { useState, useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const PlaintextExample = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { items, reset } = useContext(ItemContext);

    const handleChange = (ev) => {
        setBuyer(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }));
    };

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const sendOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then(({ id }) => {
                if (id) {
                    alert("Su orden: " + id + " ha sido realizada!");
                }
            })
            .finally(() => {
                reset();
                setBuyer(initialValues);
            });
    };

    if (items.length === 0) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h2>Muchas gracias por tu compra</h2>
          </div>
        );
      }
      

    return (
        <div>
            <h2>Formulario de Compra</h2>
            <Form>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" value={buyer.name} name="name" onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" value={buyer.email} name="email" onChange={handleChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Phone
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" value={buyer.phone} name="phone" onChange={handleChange} />
                </Col>
            </Form.Group>
                <button type="button" onClick={sendOrder}>
                    Confirmar Compra
                </button>
                </Form>
            <div>Total: ${total}</div>
        </div>
    );
};



// function PlaintextExample() {
//     return (
        
        
//     );
// }

// export default PlaintextExample;