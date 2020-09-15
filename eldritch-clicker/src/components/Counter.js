import React from "react";

//Counters display resources. They do not alter them. 
//(Though perhaps they should as it becomes more complex?)

//Will implement CounterBox later. May Consider using Children for it.

function Counter(props){
    //Add props.rate? Or do that elsewhere if this just reports. 

    // console.log("name", props.name);
    // console.log("resources", props.resources);

    //The way I'm accessing resources here seems unclean
    if(props.resources[props.name] > 0) {
        return(
            <p>{props.name}: {props.resources[props.name]}</p>
        );
    }
    return (<></>);
    
}

export default Counter;