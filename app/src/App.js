// App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './components/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import MyContext from './components/Usecontext_components/MyContext';
import CartContext from './components/Without_Server_components/CartContext';

const App = () => {
  const [sharedValue, setsharedValue] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    const existingProduct = cart.find(product => product.id === newProduct.id);

    if (existingProduct) {
        // If the product already exists in the cart, increment its quantity
        const updatedCart = cart.map(product =>
            product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCart(updatedCart);
    } else {
        // If the product doesn't exist in the cart, add it with a quantity of 1
        setCart(prevCart => [...prevCart, { ...newProduct, quantity: 1 }]);
    }
};

  const removeFromCart = (productId, quantityToRemove) => {
    setCart(prevCart => {
      return prevCart.map(product => {
        if (product.id === productId) {
          if (product.quantity > quantityToRemove) {
            return { ...product, quantity: product.quantity - quantityToRemove };
          } else {
            return null;
          }
        } else {
          return product;
        }
      }).filter(product => product !== null);
    });
  };

  return (
    <div>
      <div style={{backgroundColor: sharedValue}}>
        <MyContext.Provider value={{ sharedValue, setsharedValue }}>
          <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <Navbar />
            <Outlet />
          </CartContext.Provider>
        </MyContext.Provider>
        <footer className='footer'>
          <hr></hr>
          <Footer />
          <hr></hr>
        </footer>
      </div>
    </div>
  );
};

export default App;