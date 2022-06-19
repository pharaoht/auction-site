import React, { useState, useRef } from 'react';
import useHttp from "../hooks/useHttp";
import { userActions } from '../stateslices/userState';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/components/forms.css';

export const LoginForm = () => {

    const [formData, setFormData] = useState({ email: null, password: null });

    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.isAuthenticated);

    const linkRef = useRef();

    const requestObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: 'http://localhost:4000/auth/account-login/',
        body: formData,
    };

    const requestCallback = data => dispatch(userActions.login(data));

    const { sendRequest } = useHttp(requestObject, requestCallback);

    const changeHandler = event => setFormData({ ...formData, [event.target.name]: event.target.value })

    const submitHandler = event => {
        event.preventDefault();
        sendRequest();
    }

    useEffect(() => { isAuth && linkRef.current.click() }, [isAuth])

    return (
        <>
            <form onSubmit={submitHandler}>
                <Link id='link' to='/' ref={linkRef}>-</Link>
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

    const { sendRequest } = useHttp(requestObject, requestCallback);

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

export const CreateNewProductForm = () => {

    const [productData, setProductData] = useState({ product_name: null, desc: null, photo1: null });

    const userId = useSelector((state) => state.userId);

    const token = localStorage.getItem('token');

    const formData = new FormData();

    const requestObj = {
        method: 'POST',
        url: 'http://localhost:4000/products/create-new-product/',
        headers: {
            'Authorization': 'Bearer ' + token,

        },
        body: formData,
    };

    const requestCallback = data => console.log(data);

    const { isLoading, error, sendRequest } = useHttp(requestObj, requestCallback);

    const changeHandler = event => setProductData({ ...productData, [event.target.name]: event.target.value });

    const submitHandler = (event) => {
        event.preventDefault();

        let lastIndex = productData.photo1.lastIndexOf('\\')

        if (lastIndex > 0) {
            productData.photo1 = productData.photo1.substring(lastIndex + 1);
        };

        formData.append('product_name', productData.product_name);
        formData.append('desc', productData.desc);
        formData.append('userId', userId);
        formData.append('image', productData.photo1);


        sendRequest();

    };

    return (
        <>
            <form onSubmit={submitHandler} className='product-form-container' enctype='multipart/form-data'>
                <div>
                    <h2>Add New Product</h2>
                </div>
                <div>
                    <span>Name of your product</span>
                    <p>
                        <input type='text' name='product_name' onChange={changeHandler} />
                    </p>
                </div>
                <div>
                    <span>Describe your product</span>
                    <p>
                        <textarea name='desc' onChange={changeHandler}></textarea>
                    </p>
                </div>
                <div>
                    <span>Upload photo of product</span>
                    <p>
                        <input type='file' name='photo1' onChange={changeHandler} />
                    </p>
                </div>
                <div>
                    <button type='submit'>Create</button>
                </div>
            </form>

        </>
    )
};

