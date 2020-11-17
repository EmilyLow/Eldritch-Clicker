import React, {useState, useEffect} from 'react';
import Counter from "./components/Counter";
import Feed from "./components/Feed";
import messageData from "./messageData";
import CreationButton from "./components/CreationButton";
import GodDisplay from "./components/GodDisplay";
import MemberHolder from "./components/MemberHolder";

function App() {


  //Initial resources for testing




  //End testing

  let initialResources = {
    power: 0
  }
  let initialGodState = {
    created: false,
    level: 1
  }


  let [resources, setResources] = useState(JSON.parse(localStorage.getItem(resources)) || initialResources);
  //Its possible the parse messes with || here
  let [godStatus, setGodStatus] = useState(JSON.parse(localStorage.getItem(gotStatus)) || initialGodState);
  let [messageList, setMessageList] = useState(["Test Message 1"]);



  // console.log("App resources", resources);

  function bloodSacrifice() {
    setResources({...resources, power: resources.power +1});
    let randNum = Math.floor(Math.random() * messageData.sacrifice.length);
    setMessageList([...messageList, messageData.sacrifice[randNum].text ]);
  }

  React.useEffect(() => {
    localStorage.setItem(resources, JSON.stringify(resources) )
  }, [resources] )

  React.useEffect(() => {
    localStorage.setItem(gotStatus, JSON.stringify(gotStatus) )
  }, [gotStatus] )
  

  return (
    <div className="App">
      <button 
      onClick={() => bloodSacrifice()}>Make a blood sacrifice</button>
      <CreationButton resources={resources} godStatus={godStatus} setGodStatus={setGodStatus} />
      <GodDisplay godStatus={godStatus}/>
      <Counter name="power" messageType="sacrifice" resources = {resources}/>
      <MemberHolder resources={resources} godStatus={godStatus}/>
      <Feed messages={messageList}/>
    </div>
  );
}

export default App;
