import React, { useState } from 'react';
import '../styles/containers/login.css';
import { LoginForm, SignUpForm } from '../components/forms';

const Login = () => {


    return (
        <div className='login-parent-container'>
            <div>
                <LoginForm />
            </div>
            <div>
                <SignUpForm />
            </div>
        </div>
    )
};

export default Login;

//ctrl + D to select multiple keywords