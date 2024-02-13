import React from 'react';

const MyContext = React.createContext({
    sharedValue: null,
    setsharedValue: () => {},
});

export default MyContext;