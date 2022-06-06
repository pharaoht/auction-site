import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/sideBar.css';

const SideBar = () => {

    const [toggle, setToggle] = useState(false);

    const cssClass = toggle ? 'active' : '';

    const toggleHandler = () => setToggle(prevState => !prevState);

    return (
        <>
            <div className={`navigation ${cssClass}`}>
                <ul className='sidebar-ul'>
                    <li className='sidebar-li'>
                        <Link to='/messages'>
                            <span className='icon'><i className='fa fa-comments-o' aria-hidden='true'></i></span>
                            <span className='title'>Messages</span>
                        </Link>
                    </li>
                    <li className='sidebar-li'>
                        <Link to='/your-listings'>
                            <span className='icon'><i className='fa fa-list' aria-hidden='true'></i></span>
                            <span className='title'>Your Listings</span>
                        </Link>
                    </li>
                    <li className='sidebar-li'>
                        <Link to='/watch-listings'>
                            <span className='icon'><i className='fa fa-eye' aria-hidden='true'></i></span>
                            <span className='title'>Watch List</span>
                        </Link>
                    </li>
                    <li className='sidebar-li'>
                        <Link to='/reviews'>
                            <span className='icon'><i className='fa fa-check-circle-o' aria-hidden='true'></i></span>
                            <span className='title'>Reviews</span>
                        </Link>
                    </li>
                    <li className='sidebar-li'>
                        <Link to='/settings'>
                            <span className='icon'><i className='fa fa-sliders' aria-hidden='true'></i></span>
                            <span className='title'>Settings</span>
                        </Link>
                    </li>
                    <li className='sidebar-li'>
                        <Link to='/settings'>
                            <span className='icon'><i className='fa fa-info-circle' aria-hidden='true'></i></span>
                            <span className='title'>Help</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`toggle ${cssClass}`} onClick={toggleHandler}></div>
        </>
    )
};


export default SideBar;