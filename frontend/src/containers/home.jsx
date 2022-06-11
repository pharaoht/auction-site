import React, { useEffect, useState } from 'react';
import '../styles/containers/home.css';
import SearchBar from '../components/searchBar';
import FilterBar from '../components/filterBar';
import Auctions from '../components/auctions';
import useHttp from '../hooks/useHttp';
import config from '../config.json';

let intial = true;

const Home = () => {

    const [listings, setListings] = useState([]);

    const filterBarLinks = config.homeLinks;

    const obj = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:4000/products/get-all-products/',
    };

    const { isLoading, error, sendRequest } = useHttp(obj, setListings);

    useEffect(() => {
        if (intial) sendRequest();
        return () => intial = false;
    }, [sendRequest]);

    return (
        <div className='home-component-parent'>
            <div className='home-search-content'>
                <SearchBar />
            </div>
            <div className='home-main-content'>
                <div className='home-filterbar-content'>
                    <FilterBar links={filterBarLinks} />
                </div>
                <div className='home-auctions-content'>
                    <Auctions listings={listings} loading={isLoading} />
                </div>
            </div>
        </div>
    )
};

export default Home;