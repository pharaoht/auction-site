import React, { useState } from 'react';
import '../styles/containers/home.css';
import SearchBar from '../components/searchBar';
import FilterBar from '../components/filterBar';
import Auctions from '../components/auctions';

const Home = () => {

    const [listings, setListings] = useState([]);

    return (
        <div className='home-component-parent'>
            <div className='home-search-content'>
                <SearchBar />
            </div>
            <div className='home-main-content'>
                <div className='home-filterbar-content'>
                    <FilterBar />
                </div>
                <div className='home-auctions-content'>
                    <Auctions />
                </div>
            </div>
        </div>
    )
};

export default Home;