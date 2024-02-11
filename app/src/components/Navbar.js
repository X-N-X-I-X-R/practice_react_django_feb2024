// Navbar.js or Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/categories">categories</Link></li>
          <li><Link to="/calc">Calc</Link></li>
          <li><Link to="/b">B</Link></li>
          <li><Link to="/change_color_input">Change Color Input</Link></li>
          <li><Link to="/Home_w_props">Homework</Link></li>
          <li><Link to="/Crud_cat">crud</Link></li>
          <li><Link to="/Customers">Customers</Link></li> 
          <li><Link to="/AddCustomer">Add Customer</Link></li>
<li><Link to="/Login">Login</Link></li>


        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
