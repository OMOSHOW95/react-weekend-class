import React from "react";
import Morning from "./Morning";
import Afternoon from "./Afternoon";
import Evening from "./Evening";


const Message1=()=>{
     
     const time = new Date().getHours();
     if (time < 12){
        return <Morning/>;
       }else if (time >= 12 && time < 16){
        return <Afternoon/>;
       }else if (time >= 16 && time < 20){
        return <Evening/>;
       }
    };
   



export default Message1