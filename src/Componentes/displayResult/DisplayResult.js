import React from 'react';
import "./DisplayResult.css";

const DisplayResult =({value, result}) =>(
    <div className="displayResult">
        <div>{value}</div>
        <div>{result}</div>
    </div>
);

export default DisplayResult;