// Cart.jsx
import React, { useContext, useEffect } from 'react';
import CartContext from './CartContext';
import Total_price from './Total_price';
import { FaTrash } from 'react-icons/fa'; // Import FaTrash


const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext); // Use removeFromCart from context

    useEffect(() => {
        console.log("cart changed");
    }, [cart]);

    const handleRemove = (productId, quantityToRemove) => {
        removeFromCart(productId, quantityToRemove);
    };

    let cartItems = [];
    cart.forEach((product, index) => {
        cartItems.push(
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}</td>
                <td>
                    <select id={`product-${product.id}`}>
                        {[...Array(product.quantity).keys()].map(i => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>


<button style={{
    backgroundColor: 'lightgreen',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px'
}} onClick={() => handleRemove(product.id, document.getElementById(`product-${product.id}`).value)}><FaTrash size={20} /></button>                </td>
            </tr>
        );
    });

    return (
        <React.Fragment>
            {cartItems}
            <div><Total_price/></div>
        </React.Fragment>
    );
};

export default Cart;