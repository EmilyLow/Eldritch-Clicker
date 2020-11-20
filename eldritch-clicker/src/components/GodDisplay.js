import React from "react";
import messageData from "../messageData";




function GodDisplay(props) {

    if(props.godStatus.created == false) {

        return <></>
    }
    else if (props.godStatus.level == 1) {
        console.log("godStatus in display", props.godStatus);
       return <p>{messageData.story[0].text}</p>
    }

    return <></>
}



export default GodDisplay;