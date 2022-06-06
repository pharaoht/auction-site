import React from 'react';
import '../styles/containers/layout.css';

import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';

const Layout = (props) => {
    return (
        <div className='layout-container'>
            <NavBar />
            <div className='layout-child-holder'>
                <div className='layout-child-one'>
                    <SideBar />
                </div>
                <div className='layout-child-two'>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default Layout;