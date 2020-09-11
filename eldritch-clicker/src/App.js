import React, {useState} from 'react';
import Counter from "./Counter.js";
import './App.css';

function App() {


  let initialResources = {
    power: 0
  }

  let [resources, setResources] = useState(initialResources);
  console.log("App resources", resources);
  return (
    <div className="App">
      <button 
      onClick={() => 
        setResources({...resources, power: resources.power +1})
        }>Make a blood sacrifice</button>
      <Counter name="power" resources = {resources}/>
    </div>
  );
}

export default App;
