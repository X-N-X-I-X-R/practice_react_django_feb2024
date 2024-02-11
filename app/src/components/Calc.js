import React, { useState, useEffect } from 'react';
// calculator component 
const Calc = () => { // useState is a hook that allows you to have state variables in functional components  
                       // useState returns an array with two elements: the current state value and a function that lets you update it. 
    const [input, setInput] = useState(''); // input is the current state value, and setInput is the function that updates it.
    const [result, setResult] = useState(''); // result is the current state value, and setResult is the function that updates it. 

    const handleInput = (value) => {  // handleInput is a function that takes a value as an argument and updates the input state value by concatenating the current input value with the new value.
        setInput((input) => input + value); 
    };

    const handleClear = () => { // handleClear is a function that resets the input and result state values to an empty string.
        setInput('');
        setResult('');
    };

    const handleResult = () => { // handleResult is a function that evaluates the input state value and updates the result state value with the result of the evaluation.
        try {
            const numericResult = eval(input); // eval is a function that evaluates a string as a JavaScript expression. 
            setResult(isNaN(numericResult) ? 'Invalid Input' : numericResult); // isNaN is a function that checks if a value is not a number. 
            //If the result of the evaluation is not a number, the result state value is set to 'Invalid Input'. Otherwise, it is set to the result of the evaluation.

        } catch (error) {
            setResult('Error');
        }
    };

    useEffect(() => { // useEffect is a hook that allows you to perform side effects in functional components.
// The effect is to update the document title with the result state value.
// The effect is triggered whenever the result state value changes.
// The effect is triggered after the component is rendered for the first time.
        document.title = `Result: ${result}`;
    }, [result]);

    const handleInputChange = (event) => { // handleInputChange is a function that takes an event as an argument and updates
        // the input state value with the value of the input
        // element that triggered the event.
        setInput(event.target.value); // event.target.value is the value of the input element that triggered the event.
    };

    return (
        <div className='body'>
            <h1>Calculator</h1>
            <input type="text" value={input} onChange={handleInputChange} /> <br />

            <button style={{backgroundColor: "red"}} onClick={() => handleInput('1')}> 1 </button>       
            <button onClick={() => handleInput('2')}> 2 </button>
            <button onClick={() => handleInput('3')}> 3 </button>
            <button onClick={() => handleInput('4')}> 4 </button> <br />
            <button onClick={() => handleInput('5')}> 5 </button>
            <button onClick={() => handleInput('6')}> 6 </button>
            <button onClick={() => handleInput('7')}> 7 </button>
            <button onClick={() => handleInput('8')}> 8 </button> <br />
            <button onClick={() => handleInput('9')}> 9 </button>
            <button onClick={() => handleInput('0')}> 0 </button>
            <button onClick={() => handleInput('+')}> + </button>
            <button onClick={() => handleInput('-')}> - </button> <br />
            <button onClick={() => handleInput('*')}> * </button>
            <button onClick={() => handleInput('/')}> / </button>
            <button onClick={handleClear}> Clear </button>
            <button onClick={handleResult}> Result </button> <br />
            <h2>Result: {result}</h2>
        </div>
    );
};

export default Calc;


