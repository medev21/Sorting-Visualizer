import React from 'react';

const BarComponent = () => {

    const arr = [5, 20, 10, 14, 3, 2];

    return(
        <div className="bar-section">
            <ul>
                {arr.map((el, idx) => {
                    return <li key={idx} style={{height: el * 10 + "px"}} className="bar"></li>
                })}
            </ul>
        </div>
    )
};

export default BarComponent;