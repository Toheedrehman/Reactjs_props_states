import React from "react";
function New_child(props){
    return(
        <div>
             <button onClick={props.onclick}>click me</button>
             <h1>My car brand is {props.brand}</h1>
             <h1>my car model is {props.model}</h1>

        </div>
    )
}

export default New_child