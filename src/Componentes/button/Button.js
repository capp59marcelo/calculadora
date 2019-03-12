import React from 'react'
import "./Button.css"
const Button = ({ label, click }) => (
    <button
        onClick={() => click(label)}
        className="button">
        {label}
    </button>
);

export default Button;