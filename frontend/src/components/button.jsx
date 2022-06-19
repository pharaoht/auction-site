import React from 'react';
import '../styles/components/button.css';

const Button = ({ text, type, cssClass, onClick }) => {

    return (
        <button className={`btn ${cssClass}`} type='button' onClick={onClick}>
            {text}
        </button>
    )
};

export default Button;