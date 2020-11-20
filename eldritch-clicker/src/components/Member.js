

import React, {useState} from "react";
import memberData from "../memberData"

//Members  can be bought. They should keep track of how many of them there are.
//Hold the button to buy and sell more of them. 
//Directly alter resource rate? How that works is probably something I should reference


//Currently, switch statement inside member
function Member(props) {
    // console.log("Member created");
    let initialState = {name: "Test Name", number: 0, price: 0, rate: 0, display: false}
    //Testing for rendering
    let [display, setDisplay] = useState(false);
    let pulledData = memberData[props.name];
    //Confirmed, this fails like its supposed to
    let [info, setInfo] = useState(pulledData ? pulledData : initialState );
    //The problem with this is that initialize is called way too many times. Too many rerenders
    // initialize(); 
    // console.log(info);
    // checkDisplay()
    


    //Okay so using a tenarary (?) operator makes it not infinitely rerender, but removes the ability to check if it shows. Could check that seperately in a way that doesn't rerender unless its true. 

    function checkDisplay() {
        //Also causes too many rerenders
        if(props.fake === "5") {
            setDisplay(true);
        }
        
    }


    //References memberData file to assign correct member attributes and checks props to see if member should be displayed
    function initialize() {
        // console.log("Initalized");
        //If prerequisites are met, set display true
        setInfo({...info, ...memberData[props.name]})
        // console.log("Updated info", info)
    }
    //instead of info.display
    //Does not cause infinite rerenders, probably because I'm not setting state
    //Lets check all this with display being a seperate property
    // if (props.fake === "5") {
    //Okay this also causes infinite rerenders
    // if(display === true) {
    //Okay I think it almost needs to be passed down as props
    //But I want the object itself to figure out whether it should be displayed
    //So I think that works but means i just can't let "displayed" be part of state. There might be a way to do this and I should keep an eye out for it. I can probably set displayed to true after it is displayed,but not use it to determine
    let sillyTest = false;
    if(2+2 ===4) {
        sillyTest = true;
    }

    if (sillyTest) {
        return (<>
        <h3>{info.name}</h3>
        <p>{info.rate} per second</p>
        <p>Recruited: {info.number}</p>
        {/* Edit to be equation based off price and count */}
        <p>Price: {info.price} life force</p>
        {/* Edit to deal with singular/plural */}
        <button>Recruit {info.name}</button>
        </>)
    }
    return (<></>);
}

export default Member;