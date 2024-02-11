import React from 'react'

const Home_w_two = ({handleColorChange}) => {
  return (
    <div style={{backgroundColor:handleColorChange}}>Home_w_two

<input type='color' onChange={(e)=>handleColorChange(e.target.value)}></input>

    
    
    </div>
  )
}

export default Home_w_two