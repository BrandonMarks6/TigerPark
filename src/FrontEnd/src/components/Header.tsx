import React from 'react';
import CarIcon from '../assets/car.png'
import ProfileIcon from '../assets/profile-icon.png'
import '../styles/Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="left-header">
                <Link to='/'>
                    <img src={CarIcon}/>
                </Link>
            </div>

            <div className="right-header">
                <Link to='/login'>
                    <img src={ProfileIcon}></img>
                </Link>
            </div>
        </header>
    );
};

export default Header;
