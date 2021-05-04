import "./App.css";
import BarComponent from "./components/BarComponent";
import { UseStores } from './mobx/UseStore';
import { observer } from "mobx-react-lite"

const  App = observer(() => {

  const { bubbleSortStore } = UseStores();

  const handleSort = () => {

    console.log(bubbleSortStore.currentElement)
    // bubbleSortStore.setBubbleSort([5, 20, 10, 14, 3, 2])
  }

  return (
    <div className="App">
      <button onClick={handleSort}>sort</button>
      <BarComponent />
    </div>
  );
});

export default App;
