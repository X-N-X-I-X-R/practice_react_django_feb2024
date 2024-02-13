import React, { useContext } from 'react';
import CartContext from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Total_price = () => {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    return (
        <div style={{
            backgroundColor: 'lightgreen',
            border: '1px solid black',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
        }}>
            <FaShoppingCart size={32} />  {totalPrice}$
        </div>
    );
};

export default Total_price;