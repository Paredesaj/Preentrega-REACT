import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { items, reset, removeItem } = useContext(ItemContext);
    const navigate = useNavigate(); 

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const proceedToCheckout = () => {
        navigate('/checkout');
    };

    if (items.length === 0) return "Regresa al inicio";

    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.imagen} alt={item.title} height={200} />
                    <p>{item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar Item</button>
                </div>
            ))}
            <br />
            <div>Total $ {total}</div>
            <br />
            <button onClick={reset}>Vaciar Carrito</button>
            <br />
            <button onClick={proceedToCheckout}>Proceder a la Compra</button>
        </>
    );
};
