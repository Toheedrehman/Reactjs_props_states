import React, { useState } from "react";
import { useAccordionButton } from "react-bootstrap";
function New_state(){
    const [text,settext]=useState("")
    return(
        <div>
            <h1>{text}</h1>
            
            <button onClick={() =>settext(text.concat("Hi this is Toheed Rehman"))}>click to add the text </button>
            <br />
            <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="write here show on the h2" />
            <h2>{text}</h2>


        </div>
    )
}
export default New_state;