import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function Hide(){
    const [visible , setivisble]=useState(false)
    return(
        <div>
            {!visible && <p> this is the paragrah forms </p>}
            <button onClick={()=> setivisble(!visible)}>{visible ? "show":"hide"}</button>
        </div>
    )

}
export default Hide