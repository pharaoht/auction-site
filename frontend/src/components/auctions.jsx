import React from 'react';
import '../styles/components/auctions.css';
import Product from './product';

const Auctions = ({ listings }) => {

    const renderListings = () => {

        return (
            listings.map((itm, idx) => {
                return (
                    <Product
                        key={itm.id}
                        id={itm.id}
                        auctionStart={itm.auction_start}
                        isSold={itm.isSold}
                        photo={itm.photo1}
                        userId={itm.ownerID}
                    />
                )
            })
        )
    }

    return (
        <div className='auctions-parent-container'>
            {listings.length > 1 ? renderListings() : 'No Products Available'}
        </div>
    )
};

export default Auctions;