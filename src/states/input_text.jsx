import React, { useState } from "react";
function Text_live (){
const [text,settext]=useState("")
    return(
        <div>
            <input type="text" value={text} placeholder="Write Here" onChange={(e)=>settext(e.target.value)}/>
            <p>{text}</p>
            

        </div>
        
    )

}
export default Text_live