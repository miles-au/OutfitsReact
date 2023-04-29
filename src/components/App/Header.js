import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <div className="logo">
                    <img className="logo-icon" src={require('./logo-transparent.png')} alt='Live Price Converter Logo' />
                    <h1 className="logo-text">Live Price Converter</h1>
                </div>
        </header>
    );
}

export default Header;