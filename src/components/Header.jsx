import React from 'react';
import image from '../assets/investment-calculator-logo.png';

const Header = () => {
    return (
        <header id="header">
            <img src={image} alt="Logo showing a money bag"/>
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;