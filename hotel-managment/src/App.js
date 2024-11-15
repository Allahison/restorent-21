// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import Routing from './routing/Routing';
import'./App.css';
const App = () => {
    const user = useSelector((state) => state.auth.user);

    return (
      <Routing/>
    );
};

export default App;
