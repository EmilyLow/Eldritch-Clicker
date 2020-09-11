import React from "react";

//Counters display resources. They do not alter them. 
//(Though perhaps they should as it becomes more complex?)

//Will implement CounterBox later

function Counter(props){
    console.log("name", props.name);
    console.log("resources", props.resources);

    return(
        <p>{props.name}: {props.resources[props.name]}</p>
    )
}

export default Counter;