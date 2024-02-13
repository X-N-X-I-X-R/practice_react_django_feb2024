import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import MyContext from './MyContext';

const Clr = () => {
    const { sharedValue, setsharedValue } = useContext(MyContext);

    // Cleanup function: This will be called when the component unmounts
    useEffect(() => {
        return () => {
            // Set sharedValue to "white" when component unmounts (if needed)
            // This might be unnecessary depending on your use case
            setsharedValue("white");
        };
    }, [setsharedValue]); // Dependency array to ensure this effect runs only when setsharedValue changes

    const handleClick = () => {
        // Toggle between "black" and "white"
        setsharedValue(sharedValue === "black" ? "white" : "black");
    }

    return (
        <div>
            <button
                onClick={handleClick}
                style={{
                    borderEndEndRadius:"70%",
                    backgroundColor: 'pink',
                    color: sharedValue === 'black' ? 'white' : 'black',
                    width: '100px',
                }}
            >
                {sharedValue === 'black' ? (
                    <>
                        <FontAwesomeIcon icon={faSun} style={{ fontSize: '1.5em' }} />
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faMoon} style={{ fontSize: '1.5em' }} />
                    </>
                )}
            </button>
        </div>
    );
}

export default Clr;
