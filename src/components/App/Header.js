import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <div className="logo">
                    <img className="logo-icon" src={require('./logo-transparent.png')} alt='Clothing Ruler Logo' />
                    <h1 className="logo-text">Clothing Ruler</h1>
                </div>
        </header>
    );
}

export default Header;