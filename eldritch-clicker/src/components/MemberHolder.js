import React from "react";
import Member from "./Member";

function MemberHolder(props){
    
    let {resources, godStatus} = props;
    //  console.log("Member Holder exists");
    //Use plural name of recruit
   
    if(godStatus.created === true) {
        return (
            <div>
                <h2>Recruits:</h2>
                {/* Spider */}
                {/* Wait how do I pass down a number god */}
                <Member name="spiders" />
                <Member name="cats"/>
            </div>
    
        );
    }
    else{
        return <></>
    }
   
    
}

export default MemberHolder;