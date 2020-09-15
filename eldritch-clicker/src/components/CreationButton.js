import React from "react";


function CreationButton(props){
    
    let updateStatus = () => {
        props.setGodStatus({...props.godStatus, created: true, level: 1})
    }

    if(props.resources.power > 7 && props.godStatus.created == false) {
        return(
            <button onClick={updateStatus}>Create a God</button>
        );
    }
    return (<></>);
    
}

export default CreationButton;