import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header-container'>
            <div className='header'>
                <img src={logo} alt="" />
                <div className='header-info'>
                    <a href="./Shop">Shop</a>
                    <a href="./Order-view">Order View</a>
                    <a href="./Manage-Inventory">Manage Inventory</a>
                    <a href="./Login">Login</a>
                </div>
            </div>
            
        </nav>
    );
};

export default Header;