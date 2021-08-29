import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { UseStores } from "../../mobx/UseStore";

const BarComponent = observer(({ arr }) => {

    const { bubbleSortStore } = UseStores();
    // console.log("🚀 ~ file: index.js ~ line 9 ~ BarComponent ~ arr", arr)

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