import React from 'react';
import '../styles/components/button.css';

const Button = ({ text, type, cssClass }) => {

    return (
        <button className={`btn ${cssClass}`} type='button'>
            {text}
        </button>
    )
};

export default Button;