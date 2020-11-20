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
    power: 0,
    rps: 1
  }
  let initialGodState = {
    created: false,
    level: 1
  }


  // let [resources, setResources] = useState(JSON.parse(localStorage.getItem("resources")) || initialResources);
  // //Its possible the parse messes with || here
  // let [godStatus, setGodStatus] = useState(JSON.parse(localStorage.getItem("godStatus")) || initialGodState);
  let [messageList, setMessageList] = useState(["Test Message 1"]);

  //Version without local storage
  //!!Will probably delete
  // let [godStatus, setGodStatus] = useState(initialGodState);
  let [resources, setResources] = useState(initialResources);
  //Trying instead of godStatus
  let[godCreated, setGodCreated] = useState(false);



 
  // //Sets items to local storage when updated
  // React.useEffect(() => {
  //   localStorage.setItem("resources", JSON.stringify(resources) )
  // }, [resources] )

  // React.useEffect(() => {
   
  //   localStorage.setItem("godStatus", JSON.stringify(godStatus) )
  // }, [godStatus] )


  // Timer
  // Don't understand return bit of this perfectly. Should ends when unmounts but not mounted in first place
  React.useEffect(() => {
    const interval = setInterval(() => {
      
      // increment();
      setResources(resources => resources.power +1);
      console.log(resources.power);

    }, 1000)
    return () => clearInterval(interval);
  }, [godCreated])
  
  function bloodSacrifice() { 
    setResources({...resources, power: resources.power +1});
    // let randNum = Math.floor(Math.random() * messageData.sacrifice.length);
    // setMessageList([...messageList, messageData.sacrifice[randNum].text ]);
  }

  //Increases resources when triggered
  // function increment(){
  //   console.log("Increment called", godCreated);
    
  //     let newPower = resources.power + resources.nps;
  //   setResources(resources => {...resources, power: resources.power +1});
  //   console.log(resources);
  //   }
    
  // }

  // function reset() {
  //   setResources(initialResources);
  //   setGodStatus(initialGodState);
  // }
  

  return (
    <div className="App">
      <p>Power Resource: {resources.power}</p>
      <p>God Status: {godCreated ? "true" : "false"}</p>
      <button 
      onClick={() => bloodSacrifice()}>Make a blood sacrifice</button>
      <CreationButton resources={resources} godCreated={godCreated} setGodCreated={setGodCreated} />
      {/* <GodDisplay godStatus={godStatus}/> */}
      {/* <Counter name="power" messageType="sacrifice" resources = {resources} testNumber={testNumber}/> */}
      {/* <MemberHolder resources={resources} godStatus={godStatus}/> */}
      {/* <Feed messages={messageList}/> */}
      {/* Make so it resets feed as well */}
      {/* <button onClick={() => reset() }>Reset</button> */}
    </div>
  );
}

export default App;
