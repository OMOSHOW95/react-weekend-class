import React,{useState} from "react";
import Classwork3 from "./Classwork3";



const Thirteenth=()=>{
const [greetings, setGreetings]= useState('Welcome')
const [message, setMessage]= useState('Enjoy your self')

    return(
        <div>
            <h1>{greetings} user. {message}</h1>
            <Classwork3 btnName= "Log Out" onClick={()=>{
                setGreetings('Goodbye')
                setMessage("see you next time")          
                }}/>
            <Classwork3 btnName= "Log In" onClick={()=>{
                setGreetings('Welcome')
                setMessage("Enjoy your self")          
            }}/>


        </div>
    );
}


export default Thirteenth