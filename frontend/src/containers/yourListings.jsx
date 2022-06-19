import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import Auctions from '../components/auctions';
import Button from '../components/button';
import FilterBar from '../components/filterBar';
import SearchBar from '../components/searchBar';
import config from '../config.json'
import Modal from '../components/modal';
import { CreateNewProductForm } from '../components/forms';
import '../styles/containers/yourListings.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const listingLinks = config.yourListingsLinks;

const YourListings = () => {

    const [listings, setListings] = useState([]);

    const [showModal, setShowModal] = useState(true);

    const linkRef = useRef();

    const isAuth = useSelector((state) => state.isAuthenticated);

    const obj = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:4000/products/get-all-products/',
    }

    const { isLoading, error, sendRequest } = useHttp(obj, setListings);

    const toggle = () => setShowModal(!showModal);

    useEffect(() => { !isAuth && linkRef.current.click() }, [isAuth])

    return (
        <div className='your-listings-parent-container'>
            <Link to='/' className='none' ref={linkRef}>-</Link>
            <Modal component={<CreateNewProductForm />} ishidden={showModal} />
            <div className='your-listings-search'>
                <SearchBar />
            </div>
            <div className='your-listigs-holder'>
                <div className='your-listings-filter-bar'>
                    <FilterBar links={listingLinks} />
                    <Button text='Add New Product' cssClass='primary' onClick={toggle} />
                </div>
                <div className='your-listings-auctions'>
                    <Auctions listings={listings} />
                </div>
            </div>
        </div>
    )
};

export default YourListings;