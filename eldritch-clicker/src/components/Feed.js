import React from "react";

function Feed(props) {

    

    return (
       <div>
           <h3>Feed:</h3>
           {props.messages.map((message) =>
                <p>{message}</p>
           )}
       </div>
    )
};

export default Feed;