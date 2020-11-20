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
  let [godStatus, setGodStatus] = useState(initialGodState);
  let [resources, setResources] = useState(initialResources);

  //!!!So currently, number does not update in return just because its value changed
  // let fakeNumber = 7;
  let[testNumber, setTestNumber] = useState(0)



 
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
      // if(godStatus.created) {
      //   // console.log("increment called");
      //   increment();
      // }
      increment();
      // console.log("set interval used");
      // console.log(godStatus.created);

      //Okay and why isn't this just testNumber +1, why testNumber => first?
      // setTestNumber(testNumber => testNumber +1);
      // console.log(testNumber);
      // console.log("Increment", resources.power )
    }, 1000)
    return () => clearInterval(interval);
  }, [])
  
  function bloodSacrifice() {
    // console.log("before", resources.power)
    setResources({...resources, power: resources.power +1});
    let randNum = Math.floor(Math.random() * messageData.sacrifice.length);
    setMessageList([...messageList, messageData.sacrifice[randNum].text ]);
    // console.log(resources.power)
  }

  //Increases resources when triggered
  function increment(){
    ///!!missing something about useState here or something
    console.log("god status in increment", godStatus)
    if(godStatus.created === true) {
      let newPower = resources.power + resources.nps;
    setResources(resources => ({...resources, power: newPower}));
    }
    
  }

  function reset() {
    setResources(initialResources);
    setGodStatus(initialGodState);
  }
  

  return (
    <div className="App">
      <p>Power Resource: {resources.power}</p>
      <button 
      onClick={() => bloodSacrifice()}>Make a blood sacrifice</button>
      <CreationButton resources={resources} godStatus={godStatus} setGodStatus={setGodStatus} />
      <GodDisplay godStatus={godStatus}/>
      <Counter name="power" messageType="sacrifice" resources = {resources} testNumber={testNumber}/>
      <MemberHolder resources={resources} godStatus={godStatus}/>
      <Feed messages={messageList}/>
      {/* Make so it resets feed as well */}
      <button onClick={() => reset() }>Reset</button>
    </div>
  );
}

export default App;
