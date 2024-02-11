import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
    console.log("customers here !! ");
    
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/customers/');
                    setCustomers(response.data);
                    console.log('%cConnecting to Django', 'color: green');                } catch (error) {
                    console.error('Error fetching customers:', error);
                }
            };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array means this effect will run once after the initial render

    return (
        <div>
            <h2>Customers</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Image</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.customer_id}>
                            <td>{customer.customer_name}</td>
                            <td>{customer.customer_last_name}</td>
                            <td><img src={customer.customer_img} alt="customer" /></td>
                            <td>{customer.customer_city}</td>
                            <td>{customer.customer_address}</td>
                            <td>{customer.customer_phone}</td>
                            <td>{customer.customer_active ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
                    }

export default Customers;