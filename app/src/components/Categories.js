import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
    console.log('Categories component');
    const [meat, setMeat] = useState([]);
    const [dairy, setDairy] = useState([]);
    
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        console.log('Categories useEffect');
        const fetchMeat = async () => {
            const response = await axios.get('http://localhost:3000/meat');
            setMeat(response.data);
            console.log('meat', response.data);
        };

        const fetchDairy = async () => {
            const response = await axios.get('http://localhost:3000/dairy');
            setDairy(response.data);
            console.log('dairy', response.data);
        };

        fetchMeat();
        fetchDairy();
    }, []);

    return (
        <div className="container">
            <h1>Categories</h1>
            <button className="btn btn-primary" onClick={() => setSelectedCategory('meat')}>Show Meat</button>
            <button className="btn btn-primary" onClick={() => setSelectedCategory('dairy')}>Show Dairy</button>
            {selectedCategory === 'meat' && (
                <>
                    <h2>Meat ({meat.length})</h2>
                    <div className="card-group">
    {meat.map((item, index) => (
        <div key={index} className="card">
            <img src={`https://picsum.photos/200/100?random=${Math.random()}`} alt="Random" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">ID: {item.id}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-success" onClick={() => alert('You clicked on ' + item.name)}>Click me</button>
            </div>
        </div>
    ))}
</div>
                </>
            )}
            {selectedCategory === 'dairy' && (
                <>
                    <div className="card-group">
    {dairy.map((item, index) => (
        <div key={index} className="card"> 
            <img src={`https://picsum.photos/200/100?random=${Math.random()}`} alt="Random" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">ID: {item.id}</p>
            </div>
        </div>
    ))}
</div>
<div>

</div>
                </>
            )}
        </div>
    );
};

export default Categories;





