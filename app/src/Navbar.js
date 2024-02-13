import React, { useContext } from 'react'; // Import useContext
import { Link } from 'react-router-dom';
import { FaTh, FaCalculator, FaPalette, FaTasks, FaUsers, FaUserPlus, FaSignInAlt, FaUserCircle, FaTools, FaClock } from 'react-icons/fa';
import './components/Navbar.css'; // Import the CSS file
import Clr from './components/Usecontext_components/Clr';
import CartContext from './components/Without_Server_components/CartContext'; // Import CartContext

const Navbar = () => {
  const { cart } = useContext(CartContext); // Consume CartContext

  return (
    <div id='main_div'>
      <nav>
        <ul>
          <li><Clr /></li>
          <li><Link to="/categories"><FaTh /> Categories</Link></li>
          <li><Link to="/calc"><FaCalculator /> Calc</Link></li>
          <li> <Link to="/b"> <FaClock /> B  </Link></li>
          <li><Link to="/change_color_input"><FaPalette /> Change Color Input</Link></li>
          <li><Link to="/Home_w_props"><FaTasks /> Homework</Link></li>
          <li><Link to="/Crud_cat"><FaTasks /> CRUD</Link></li>
          <li><Link to="/Customers"><FaUsers /> Customers</Link></li>
          <li><Link to="/AddCustomer"><FaUserPlus /> Add Customer</Link></li>
          <li><Link to="/Login"><FaSignInAlt /> Login</Link></li>
          <li><Link to="/register"><FaUserCircle /> Register</Link></li>
          <li><Link to="/Developer_Tools"><FaTools /> Developer Tools</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Cart">Cart</Link></li>

          <li>Cart ({cart ? cart.length : 0})</li> {/* Display cart length */}        </ul>
      </nav>
    </div>
  );
};

export default Navbar;