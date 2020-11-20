import React from "react";
import messageData from "../messageData";




function GodDisplay(props) {

    if(props.godCreated === true) {

        return <p>{messageData.story[0].text}</p>
    }

    return <></>
}



export default GodDisplay;