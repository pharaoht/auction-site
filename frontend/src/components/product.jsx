import React, { useState } from 'react';
import '../styles/components/product.css';

const url = 'https://media.cnn.com/api/v1/images/stellar/prod/220314092250-4-apple-iphone-se-2022-cnn-underscored.jpg?c=16x9&q=h_720,w_1280,c_fill';

const Product = ({ props }) => {

    const [hover, setHover] = useState(false);

    const cssClass = hover ? 'toggle-display' : '';

    const startedProduct = () => {

        return (
            <>
                <div className='product-image-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <span className={`${cssClass}`}>Phone</span>
                    <img className=''
                        src={url} alt='product_photo' />
                </div>
                <div className='product-detail-container'>
                    <div className=''>
                        <div className='product-info-detail'>
                            <span className='product-icon'><i className='fa fa-user' aria-hidden='true'></i></span>
                            <span>user</span>
                        </div>
                        <div className=''>
                            <span className='product-icon'><i className='fa fa-hand-paper-o' aria-hidden='true'></i></span>
                            <span>Bids: 8</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='product-time-holder'>
                            <span className='product-icon'><i className='fa fa-clock-o' aria-hidden='true'></i></span>
                            <span>23hrs ago</span>
                        </div>
                        <div className=''>
                            <span className='product-icon'><i className='fa fa-usd' aria-hidden='true'></i></span>
                            <span>$1.00</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='product-main-container'>
            {startedProduct()}
        </div>
    )
};

export default Product;