import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './orderReview.css';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter( product => product.key !== key)
        setCart(newCart);
        deleteFromDb(key);
    }

    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/shipping');
    }

    return (
        <div className="review-container">
            <div className="order-container">
                {
                    cart.map(product => <ReviewProduct 
                        key = {product.key}
                        product={product}
                        handleRemove = {handleRemove}
                        ></ReviewProduct>)
                }
            </div>
            <div>
                <Cart cart={cart}>
                    <Link>
                        <button onClick={handlePlaceOrder} className="btn-regular">Procced To Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;