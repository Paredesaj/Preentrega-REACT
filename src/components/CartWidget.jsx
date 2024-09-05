import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

function CartWidget() {

    const {items} = useContext(ItemContext);

    const quantity = items.reduce((acc, act) => acc+ act.quantity, 0);

    return (
        <div style={{ 
            position: 'relative',
            display: 'inline-block',
            marginRight: '10px',
            }}>
                <Link to='/cart' style={{textDecoration:"none" }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }}/> {quantity}
            </Link>
            <div
                style={{
                    position: 'absolute',
                    top: '-30%',
                    left: '70%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '12px',
                }}
            >
            </div>
        </div>
    );
}

export default CartWidget;