import React, { useState } from 'react';
import useHttp from "../hooks/useHttp";
import { userActions } from '../stateslices/userState';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {

    const [formData, setFormData] = useState({ email: null, password: null });
    const dispatch = useDispatch();

    const requestObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: 'http://localhost:4000/auth/account-login/',
        body: formData,
    };

    const requestCallback = (data) => {
        console.log(data)
        dispatch(userActions.login(data));
    };

    const { isLoading, error, sendRequest } = useHttp(requestObject, requestCallback);

    const changeHandler = event => setFormData({ ...formData, [event.target.name]: event.target.value })

    const submitHandler = event => {
        event.preventDefault();
        sendRequest();
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    Email
                    <input type='email' name='email' onChange={changeHandler} required />
                </div>
                <div>
                    Password
                    <input type='password' name='password' onChange={changeHandler} required />
                </div>
                <div>
                    <button type='submit'>Log In</button>
                </div>
            </form>
        </>
    )
};

export const SignUpForm = () => {

    const [formData, setFormData] = useState({
        user_name: null,
        email: null,
        first_name: null,
        last_name: null,
        password: null,
    });

    const requestObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: 'http://localhost:4000/user-accounts/create-user/',
        body: formData,
    };

    const requestCallback = (statusCode) => { };

    const { isLoading, error, sendRequest } = useHttp(requestObject, requestCallback);

    const changeHandler = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })

    const submitHandler = (event) => {
        event.preventDefault();
        sendRequest();
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    User Name
                    <input type='text' name='user_name' onChange={changeHandler} required />
                </div>
                <div>
                    Email
                    <input type='email' name='email' onChange={changeHandler} required />
                </div>
                <div>
                    First Name
                    <input type='text' name='first_name' onChange={changeHandler} required />
                </div>
                <div>
                    Last Name
                    <input type='text' name='last_name' onChange={changeHandler} required />
                </div>
                <div>
                    Password
                    <input type='password' name='password' onChange={changeHandler} required />
                </div>
                <div>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </>
    )
};

export const CreateNewProductForm = ({ onChangeFunc, onSubmitHandler }) => {
    return (
        <>
            <form onSubmit={onSubmitHandler} className='product-form-container'>
                <div>
                    <input type='text' name='product_name' onChange={onChangeFunc} />
                </div>
                <div>
                    <textarea name='desc' onChange={onChangeFunc}></textarea>
                </div>
                <div>
                    <input type='file' name='photo1' onChange={onChangeFunc} />
                </div>
                <div>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </>
    )
};

