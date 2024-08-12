import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({cartArticle}) {
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
            >{cartArticle}
            </div>
        </div>
    );
}

export default CartWidget;