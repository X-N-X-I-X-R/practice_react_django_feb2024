import React, { useState } from 'react'

const Home_w_four = () => {
    const [changecolor, setchangecolor] = useState("")
    const handlehome=(e)=>{
        setchangecolor(e.target.value)

    }

  return (
    <div  className="body"style={{backgroundColor:changecolor}}>Home_w_four
    <input type='color' onChange={handlehome}></input>
    
    </div>
  )
}

export default Home_w_four