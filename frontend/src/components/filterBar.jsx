import React from 'react';
import '../styles/components/filterBar.css';

const FilterBar = ({ links }) => {

    const renderList = () => {
        return (
            links.map((itm, idx) => {
                return (
                    <li>
                        <p>{itm.name}</p>
                    </li>
                )
            })
        )
    }

    return (
        <div className='filterbar-container'>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
};


export default FilterBar;