import React, { useContext } from 'react';
import MyContext from '../Usecontext_components/MyContext';

const Cart = () => {
  const { cartItems } = useContext(MyContext);

  return (
    <div>
      <h2></h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          {/* Display item details here. This is just an example. */}
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;