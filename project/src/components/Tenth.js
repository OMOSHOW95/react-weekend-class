import React from "react";
import './Tenth.css'
import taiwoImage from '../Images/image 2.jpg'
import TenthProp from "./TenthProp";


const Tenth=()=>{
    return(
    <div>
        <div className="card-wrap">
            <TenthProp
            displayImg={taiwoImage}
            name='Adelaja Taiwo'
            sex='Female'
            title='Full-stack Developer'
            />
            <TenthProp
            displayImg={taiwoImage}
            name='Adelaja Taiwo'
            sex='Female'
            title='Full-stack Developer'
            />
            <TenthProp
            displayImg={taiwoImage}
            name='Adelaja Taiwo'
            sex='Female'
            title='Full-stack Developer'
            />
            
            </div>
            

    </div>

    )
}


export default Tenth