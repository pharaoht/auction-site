import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../stateslices/userState';
import '../styles/components/navBar.css';

const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    const isAuth = useSelector((state) => state.isAuthenticated);
    const firstName = useSelector((state) => state.first_name);
    const dispatch = useDispatch()
    const cssClass = toggle ? 'active' : '';

    const toggleHandler = () => setToggle(prevState => !prevState);

    const logOutHandler = () => dispatch(userActions.logout())

    const guestLinks = () => {
        return (
            <>
                <li>
                    <Link to='/login'>Sign in</Link>
                </li>
                <li>
                    <Link to='/login'>Sign up</Link>
                </li>
            </>
        )
    };

    const authLinks = () => {
        return (
            <>
                <li className=''>
                    <Link className='' to='/user-profile'>Welcome, {firstName}</Link>
                </li>
                <li className=''>
                    <Link className='' to='/' onClick={logOutHandler}>Log out</Link>
                </li>
            </>
        )
    };

    return (
        <header id='header'>
            <Link className='logo' to='/'>Auction Bar</Link>
            <div id='toggle' className={`${cssClass}`} onClick={toggleHandler}></div>
            <div id='navbar' className={`${cssClass}`}>
                <ul>
                    {isAuth ? authLinks() : guestLinks()}
                </ul>
            </div>
        </header>
    )
};

export default NavBar;