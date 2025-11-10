
import React from "react";
import New_child from "./children";
function Prents_app(){
  const sayhellow = () => alert("hi this is toheed Rehman")
  return(
    <div>
    <New_child onclick ={sayhellow} model="toyota" brand=''corola />
  


    </div>
  )
}
export default Prents_app