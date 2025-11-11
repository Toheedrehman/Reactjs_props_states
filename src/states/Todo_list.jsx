import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
function Add_menu(){

    const [input_value,setinput_value]=useState("") /// this is used for inputs values
    const[items,additems]=useState([]) // this is used for the array list

    const Add_values_array =() => {
        additems([...items,input_value])
        setinput_value(""   )
    }
return(
    <div>
        <h1>Hi this is toheed </h1>
        <input type="text" name="" id=""  placeholder="write here" value={input_value} onChange={(e) => setinput_value(e.target.value)}/>
        <button onClick={Add_values_array}>add values</button>
        <ul> {items.map((item,index) =>(<li key={index}>{item
            
            }</li>) )}</ul>
    </div>
)
}

export default Add_menu