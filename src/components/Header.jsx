import React from 'react';
import image from '../assets/investment-calculator-logo.png';

const Header = () => {

    return (
        <header id="header">
            <img src={image} alt="Logo showing a money bag"/>
            <p>hello </p>
            <p>Element from master branch </p>
            <h1>Investment Calculator</h1>

            <p> New element to branch Dev </p>

            <h1>New title for branch dev</h1>

        </header>
    );
};

export default Header;