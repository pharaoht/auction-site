import React from 'react';
import '../styles/components/auctions.css';
import Product from './product';

const Auctions = ({ listings }) => {

    console.log(listings)
    const renderListings = () => {

        if (listings.length === 0) {
            return (
                <>No Products Available</>
            )
        }

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
            {renderListings()}
        </div>
    )
};

export default Auctions;