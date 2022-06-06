import React from 'react';
import '../styles/components/filterBar.css';

const FilterBar = () => {

    return (
        <div className='filterbar-container'>
            <ul>
                <li>
                    <p>Most Watched</p>
                </li>
                <li>
                    <p>Starting Soon</p>
                </li>
                <li>
                    <p>Starting Now</p>
                </li>
                <li>
                    <p>Just Added</p>
                </li>
                <li>
                    <p>Sold</p>
                </li>
            </ul>
        </div>
    )
};


export default FilterBar;