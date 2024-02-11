import React from 'react'

const Home_w_three = ({ handleColorChange }) => { // Destructure handleColorChange from props

    const handleChange = (e) => {
        handleColorChange(e.target.value)
    }

    return (
        <div >Home_w_three
            <input type='color' onChange={handleChange}></input>
        </div>
    )
}

export default Home_w_three