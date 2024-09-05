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
        const { name, value } = ev.target;

        if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
            return;
        }
        if (name === "phone" && !/^\d*$/.test(value)) {
            return;
        }
        if (name === "email") {
            setBuyer(prev => ({
                ...prev,
                [name]: value
            }));
            return;
        }

        setBuyer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const sendOrder = () => {
        if (!buyer.name || !buyer.email || !buyer.phone) {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

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
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                        Nombre
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="text" 
                            value={buyer.name} 
                            name="name" 
                            onChange={handleChange} 
                            placeholder="Ingrese su nombre" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Correo Electrónico
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="text" 
                            value={buyer.email} 
                            name="email" 
                            onChange={handleChange} 
                            placeholder="Ingrese su correo electrónico" 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                    <Form.Label column sm="2">
                        Teléfono
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="number" 
                            value={buyer.phone} 
                            name="phone" 
                            onChange={handleChange} 
                            placeholder="Ingrese su número de teléfono" 
                        />
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
