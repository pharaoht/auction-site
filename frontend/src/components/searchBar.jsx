import React from 'react';
import '../styles/components/searchBar.css';

const SearchBar = () => {

    return (
        <div className='searchbar-container'>
            <div className='search-search'>
                <span>Search</span>
            </div>
            <div className='searchbar-input'>
                <input type='text' placeholder='Search by user, product...' />
            </div>
            <div className='searchbar-btn'>
                <span>
                    <i className='fa fa-search' aria-hidden='true'></i>
                </span>
            </div>
        </div>
    )
};

export default SearchBar;