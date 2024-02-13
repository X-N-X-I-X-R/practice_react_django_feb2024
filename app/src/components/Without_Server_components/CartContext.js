// CartContext.js
import React from 'react';

const CartContext = React.createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {} // Add removeFromCart function
});

export default CartContext;
