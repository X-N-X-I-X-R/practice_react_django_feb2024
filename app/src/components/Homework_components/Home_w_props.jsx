// Home_w_props.js
import React, { useState } from 'react';
import Home_w from './Home_w';
import Home_w_three from './Home_w_three';
import Home_w_four from './Home_w_four';
import Home_w_two from './Home_w_two';

const Home_w_props = () => {
  const [changecolor, setChangecolor] = useState("");

  return (
    <div style={{backgroundColor: changecolor}}>
      Home_w_props
      <Home_w handleColorChange={setChangecolor} />
      <Home_w_two handleColorChange={setChangecolor} />
      <Home_w_three handleColorChange={setChangecolor} />

      <br></br>
      <h1> number four stand alone </h1>
      <div>   <Home_w_four  /></div>
    </div>
  );
};

export default Home_w_props;