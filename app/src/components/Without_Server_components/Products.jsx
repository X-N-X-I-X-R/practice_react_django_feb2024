import React, { useEffect, useState, useContext } from 'react';
import { getAllProducts } from './data';
import CartContext from '../Without_Server_components/CartContext'; // Import CartContext
import Cart from './Cart';
import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart

const Products = () => {
    const [products, setProducts] = useState([]);
    const { cart, addToCart } = useContext(CartContext); // Use useContext to access CartContext

    useEffect(() => {
        setProducts(getAllProducts());
    }, [cart]);

    let productItems = [];
    products.forEach((product, index) => {
        productItems.push(
            <div key={index}>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
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
                }} onClick={() => addToCart(product)}><FaShoppingCart size={20} /> Add to cart</button>
                <hr></hr>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>Products</h1>
                    {productItems}
                </div>
                <div className="col-md-4">
                    <title>Cart</title>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Cart />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;