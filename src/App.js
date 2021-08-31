import "./App.css";
import React, { useState, useEffect } from "react";
import BarComponent from "./components/BarComponent";
import { UseStores } from "./mobx/UseStore";
import { observer } from "mobx-react-lite";
import { bubbleSort } from "./algorithms/bubbleSort";

const  App = observer(() => {

  // const [arr, setArr] = useState([]);

  const { animationStore, arrayStore } = UseStores();

  useEffect(() => {
  //   setArr([5, 20, 10, 14, 3, 2]);
    // animationStore(arrayStore);
  }, []);

  const handleSort = () => {

    // const test = bubbleSortStore.sortedArray;
    // console.log("🚀 ~ file: App.js ~ line 21 ~ handleSort ~ test", test)

    animationStore.startAnimation(bubbleSort, arrayStore)

  }

  return (
    <div className="App">
      <button     onClick={handleSort}>sort</button>
      <BarComponent arr={arrayStore.arr}/>
    </div>
  );
});

export default App;
