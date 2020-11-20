import React, {useState} from "react";


function CreationButton(props){
    
    let updateStatus = () => {
        props.setGodCreated(true)
    }

    if(props.resources.power > 7 && props.godCreated === false) {
        console.log("If entered");
        return(
            <button onClick={updateStatus}>Create a God</button>
        );
    }
    return (<></>);
    
}

export default CreationButton;