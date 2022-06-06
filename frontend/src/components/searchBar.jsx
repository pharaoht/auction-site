import React from 'react';
import '../styles/components/searchBar.css';

const SearchBar = () => {

    return (
        <div className='searchbar-container'>
            <div className='searchbar-input'>

                <input type='text' />

            </div>
            <div className='searchbar-btn'>
                <span>Search</span>
            </div>
        </div>
    )
};

export default SearchBar;