import React, {useState} from 'react';
import Counter from "./components/Counter";
import Feed from "./components/Feed";
import messageData from "./messageData";
import './App.css';

function App() {


  let initialResources = {
    power: 0
  }
  let initialGodState = {
    created: false
  }


  let [resources, setResources] = useState(initialResources);
  let [godStatus, setGodStatus] = useState(initialGodState);
  let [messageList, setMessageList] = useState(["Test Message 1"]);

  // console.log("App resources", resources);

  function bloodSacrifice() {
    setResources({...resources, power: resources.power +1});
    let randNum = Math.floor(Math.random() * messageData.sacrifice.length);
    setMessageList([...messageList, messageData.sacrifice[randNum].text ]);
  }

  return (
    <div className="App">
      <button 
      onClick={() => bloodSacrifice()}>Make a blood sacrifice</button>
      <Counter name="power" messageType="sacrifice" resources = {resources}/>
      <Feed messages={messageList}/>
    </div>
  );
}

export default App;
