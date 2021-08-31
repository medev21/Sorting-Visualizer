import React from "react";
import { observer } from "mobx-react-lite";

const BarComponent = observer(({ arr }) => {


    return(
        <div className="bar-section">
            <ul>
                {arr.length !== 0 && arr.map((el, idx) => {
                    return <li key={idx} style={{height: el * 10 + "px"}} className="bar"></li>
                })}
            </ul>
        </div>
    )
});

export default BarComponent;