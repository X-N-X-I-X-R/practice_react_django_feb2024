import React from 'react';

// this is a functional component not using useeffect 
const Home_w = ({ handleColorChange }) => { // Destructure handleColorChange from props

    return (
        <div  style={{backgroundColor:handleColorChange}}>Home_w
            <input type='color' onChange={(e) => handleColorChange(e.target.value)}></input>
        </div>
    )
}

export default Home_w