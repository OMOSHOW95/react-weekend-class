import React from "react";


const EleventhProp=(props)=>{
    return(
        <div className="card-id1">
            <img src={props.displayImg} alt="" />
            <p>{props.bio}</p>

        </div>
    )

    
}



export default EleventhProp;