import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navBar.css';

const isAuthenticated = true;

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const cssClass = toggle ? 'active' : '';

    const toggleHandler = () => setToggle(prevState => !prevState);

    const guestLinks = () => {
        return (
            <>
                <li>
                    <Link to='/sign-in'>Sign in</Link>
                </li>
                <li>
                    <Link to='/sign-in'>Sign up</Link>
                </li>
            </>
        )
    };

    const authLinks = () => {
        return (
            <>
                <li className=''>
                    <Link className='' to='/user-profile'>Welcome, John</Link>
                </li>
                <li className=''>
                    <Link className='' to='/logout'>Log out</Link>
                </li>
            </>
        )
    };

    return (
        <header id='header'>
            <Link className='logo'>Auction Bar</Link>
            <div id='toggle' className={`${cssClass}`} onClick={toggleHandler}></div>
            <div id='navbar' className={`${cssClass}`}>
                <ul>
                    {isAuthenticated ? authLinks() : guestLinks()}
                </ul>
            </div>
        </header>
    )
};

export default NavBar;