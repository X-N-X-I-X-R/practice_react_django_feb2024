import React, { useState } from 'react';

const B = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            this is B component : <br />
            Count: {count} <br />
            <button onClick={()=>setCount(count-1)}> Increment count </button>
            <button onClick={()=>setCount(count+1)}> Increment count </button>

        </div>
    )
}

export default B;