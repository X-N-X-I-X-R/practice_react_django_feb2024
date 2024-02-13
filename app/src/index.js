// index.js
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import B from './components/usestate_components/B';
import ChangeColorInput from './components/usestate_components/Change_color_input';
import Home_w_props from './components/Homework_components/Home_w_props';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Categories from './components/Jsonserver_components/Categories';
import Crud_cat from './components/Jsonserver_components/Crud_cat';
import Customers from './components/django_components/Customers';
import AddCustomer from './components/django_components/AddCustomer';
import Login from './components/django_components/Login';
import RegisterUser from './components/django_components/RegisterUser';
import Developer_Tools from './components/django_components/Developer_Tools';
import Calc from './components/usestate_components/Calc';
import Products from './components/Without_Server_components/Products';
import Cart from './components/Without_Server_components/Cart';

const Index = () => {
  const [chang, setChang] = useState('');

  return (
    
    <div style={{backgroundColor:"rebeccapurple"}}>
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
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/Developer_Tools' element=  {<Developer_Tools/>} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Cart' element={<Cart />} /> 


          

        </Route>
      </Routes>
    </Router>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,

);