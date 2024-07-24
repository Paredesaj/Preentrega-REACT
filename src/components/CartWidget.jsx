import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div style={{ 
            position: 'relative',
            display: 'inline-block',
            marginRight: '10px',
            }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }} />
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
                2
            </div>
        </div>
    );
}

export default CartWidget;


