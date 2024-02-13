import React, { useState, useEffect } from 'react';

/**
 * קומפוננטה לשינוי צבע והצגתו.
 * 
 * @param {Object} props - פרופרטיס של הקומפוננטה.
 * @param {string} props.chang - הצבע שמועבר מהקומפוננטה האב.
 * @param {Function} props.setChang - הפונקציה לעדכון של הצבע בקומפוננטה האב.
 * @returns {JSX.Element} - הקומפוננטה המrendered.
 */



const Change_color_input = ({ chang, setChang }) => {
  const [userinput, setuserinput] = useState(''); 
  const [changecolor, setchangecolor] = useState('');    

  /**
   * useEffect הוק לעדכון של הצבע בכותרת והתרעה לקומפוננטה האב כאשר הצבע שונה על ידי המשתמש.
   */
  useEffect(() => {
    if (userinput) {
      setchangecolor(userinput);
      setChang(userinput);
    }
  }, [userinput, setChang]);

  return (
    <div className='body'>
    <input type="color" value={userinput} onChange={(e) => setuserinput(e.target.value)} />
      <h1 style={{ color: changecolor }}>Fuckers</h1>
      <p> data from parents  : {chang}</p>
    </div>
  );
}

export default Change_color_input;
