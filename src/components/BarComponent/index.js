import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { UseStores } from "../../mobx/UseStore";

const BarComponent = observer(({ arr }) => {

    // const [arr, setArr] = useState([]);

    // useEffect(())

    const { bubbleSortStore } = UseStores();
    // const arr = bubbleSortStore.sortedArray;
    console.log("🚀 ~ file: index.js ~ line 9 ~ BarComponent ~ arr", arr)

    // const arr = [5, 20, 10, 14, 3, 2];

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