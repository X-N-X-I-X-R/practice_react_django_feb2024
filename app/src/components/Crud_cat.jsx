import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Crud_cat = () => {
    let params = useParams();
    const MY_SERVER1 = 'http://localhost:3000/meat';
    const MY_SERVER2 = 'http://localhost:3000/dairy';

    const [prodname, setProdName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");

    useEffect(() => {
        // This code will run after the component is mounted and every time the state changes
        // You can put your side effect logic here
    }, [prodname, price, quantity, category]); // These are the dependencies

    const createProduct = async () => {
        const product = { prodname, price, quantity, category };
        const response = await axios.post(category === 'meat' ? MY_SERVER1 : MY_SERVER2, product);
        console.log("prod adding to ",{category});
        // handle response here
    };

    return (
        <div>
            name : <input type="text" value={prodname} onChange={e => setProdName(e.target.value)} placeholder="Product Name" />
            <p></p>
           price :  <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
           <p></p>

         quantity :   <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" />
         <p></p>

         category :   <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="meat">Meat</option>
                <option value="dairy">Dairy</option>
            </select>
            <p></p>

            add to database  <button onClick={createProduct}>Create Product</button>
        </div>
    );
};

export default Crud_cat;