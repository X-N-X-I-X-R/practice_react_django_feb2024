// index.js
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Calc from './components/Calc';
import B from './components/B';
import ChangeColorInput from './components/Change_color_input';
import Home_w_props from './components/Home_w_props';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Categories from './components/Categories';
import Crud_cat from './components/Crud_cat';
import Customers from './django_components/Customers';
import AddCustomer from './django_components/AddCustomer';
import Login from './django_components/Login';

const Index = () => {
  const [chang, setChang] = useState('');

  return (
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="/" element={<h1>Hello beaaaaach! </h1>} index />
          <Route path="/categories" element={<Categories />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/b" element={<B />} />
          <Route path="/change_color_input" element={<ChangeColorInput chang={chang} setChang={setChang} />} />
          <Route path="/Home_w_props" element={<Home_w_props />} />
          <Route path="/Crud_cat" element={<Crud_cat />} />
          <Route path="/Customers" element={<Customers/>} />
          <Route path="/AddCustomer" element={<AddCustomer />} /> ;
          <Route path="/Login" element={<Login />} />


        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,

);