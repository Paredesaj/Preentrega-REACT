import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import {Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
    const { items, reset, removeItem } = useContext(ItemContext);
    const navigate = useNavigate(); 

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const proceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <>
            {items.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h2>Tu carrito está vacío</h2>
                    <p>Regresa a la <Link to='/'/> para agregar productos.</p>
                </div>
            ) : (
                <>
                    {items.map((item) => (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <img src={item.imagen} alt={item.title} height={200} />
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    ))}
                    <br />
                    <div>Total: $ {total}</div>
                    <br />
                    
                    <Button variant="outline-warning" onClick={reset}>Vaciar Carrito</Button>
                    <br />

                    <Button variant="outline-warning" onClick={proceedToCheckout}>Proceder a la Compra</Button>
                </>
            )}
        </>
    );
};
