import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = ({ onAddCustomer }) => {
    const [newCustomer, setNewCustomer] = useState({
        customer_name: '',
        customer_last_name: '',
        customer_email: '',  // Added customer_email field
        customer_img: '',
        customer_city: '',
        customer_address: '',
        customer_phone: '',
        customer_active: true,
        customer_password: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setNewCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        }));
    };

    const sendDataToServer = async () => {
        const formData = new FormData();
        for (const key in newCustomer) {
            formData.append(key, newCustomer[key]);
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/customers/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            onAddCustomer(response.data);
            console.log('Customer added successfully:', response.data);
            setNewCustomer({
                customer_name: '',
                customer_last_name: '',
                customer_email: '',  // Reset email field after submission
                customer_img: '',
                customer_city: '',
                customer_address: '',
                customer_phone: '',
                customer_active: true,
                customer_password: '',
            });
        } catch (error) {
            console.error('Error adding customer:', error);

            if (error.response) {
                console.error('Server response:', error.response.data);
            } else if (error.request) {
                console.error('No response received from the server.');
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    const handleManualSubmit = (e) => {
        e.preventDefault();
        sendDataToServer();
    };

    return (
        <div>
            <h2>Add Customer</h2>
            <form>
                <label htmlFor="customer_name">
                    Name:
                    <input type="text" id="customer_name" name="customer_name" value={newCustomer.customer_name} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_last_name">
                    Last Name:
                    <input type="text" id="customer_last_name" name="customer_last_name" value={newCustomer.customer_last_name} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_email">
                    Email:
                    <input type="email" id="customer_email" name="customer_email" value={newCustomer.customer_email} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_img">
                    Image URL:
                    <input type="file" id="customer_img" name="customer_img" onChange={handleChange} accept="image/*" />
                </label>
                <label htmlFor="customer_city">
                    City:
                    <input type="text" id="customer_city" name="customer_city" value={newCustomer.customer_city} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_address">
                    Address:
                    <input type="text" id="customer_address" name="customer_address" value={newCustomer.customer_address} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_phone">
                    Phone:
                    <input type="text" id="customer_phone" name="customer_phone" value={newCustomer.customer_phone} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_password">
                    Password:
                    <input type="password" id="customer_password" name="customer_password" value={newCustomer.customer_password} onChange={handleChange} required />
                </label>
                <label htmlFor="customer_active">
                    Active:
                    <input type="checkbox" id="customer_active" name="customer_active" checked={newCustomer.customer_active} onChange={handleChange} />
                </label>
                <button onClick={handleManualSubmit}>Add Customer Manually</button>
            </form>
        </div>
    );
};

export default AddCustomer;
