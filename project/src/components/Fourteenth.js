import React,{useState} from "react";
import Classwork3 from "./Classwork3";



const Fourteenth=()=>{
const [count, setCount] = useState(0)


    return(
        <div>
            <h1>{count}</h1>
            <Classwork3 btnName ="Increment" onClick={()=>{
                setCount(count+1);
            }}/>


        </div>
    );
}


export default Fourteenth;