import React, { useState } from 'react';
import useHttp from '../hooks/useHttp';
import Auctions from '../components/auctions';
import Button from '../components/button';
import FilterBar from '../components/filterBar';
import SearchBar from '../components/searchBar';
import config from '../config.json'
import '../styles/containers/yourListings.css';

const listingLinks = config.yourListingsLinks;

const YourListings = () => {

    const [listings, setListings] = useState([]);

    const obj = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:4000/products/get-all-products/',
    }

    const { isLoading, error, sendRequest } = useHttp(obj, setListings);

    return (
        <div className='your-listings-parent-container'>
            <div className='your-listings-search'>
                <SearchBar />
            </div>
            <div className='your-listigs-holder'>
                <div className='your-listings-filter-bar'>
                    <FilterBar links={listingLinks} />
                    <Button text='Add New Product' cssClass='primary' />
                </div>
                <div className='your-listings-auctions'>
                    <Auctions listings={[]} />
                </div>
            </div>
        </div>
    )
};

export default YourListings;