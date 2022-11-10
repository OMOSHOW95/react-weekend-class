import React, { useState } from "react";
import Classwork3 from "./Classwork3";




const Fifteenth=()=>{
    const[inputdata, setInputdata]=useState({fName:"", lName:"", mName:"", email:"", password:"", confirmpassword:"", address:"", date:""})
    
    return(
        <div className="form">
                <form action="">
                    <div className="group">
                        <div className="group1">
                            <div className="form-group">
                                <input type="text" placeholder="First Name"
                                value={inputdata.fName} onChange={(event)=>{setInputdata({...inputdata, fName:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" value={inputdata.lName} onChange={(event)=>{setInputdata({...inputdata, lName:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" value={inputdata.email} onChange={(event)=>{setInputdata({...inputdata, email:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" value={inputdata.password} onChange={(event)=>{setInputdata({ ...inputdata, password:event.target.value})}}/>
                            </div>

                        </div>

                        <div className="group2">
                            <div className="form-group">
                                <input type="password" placeholder=" 
                                Confirm password" value={inputdata.confirmpassword} onChange={(event)=>{setInputdata({...inputdata, confirmpassword:event.target.value})}}/>
                            </div>
                         <div className="form-group">
                                <input type="date" placeholder="" value={inputdata.date} onChange={(event)=>{setInputdata({...inputdata, date:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Address" value={inputdata.address} onChange={(event)=>{setInputdata({...inputdata, address:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Middle Name" value={inputdata.mName} onChange={(event)=>{setInputdata({...inputdata, mName:event.target.value})}}/>
                            </div>
                            
                        </div>
                        <div className="btn-group">

                        </div>

                        

                    </div>
                    <Classwork3 btnName="Submit" className='form-btn' onClick={(event)=>{
                        event.preventDefault();
                    console.log(inputdata)
                    }}/>
                </form>

                <h1>{inputdata.fName}</h1>
                <h1>{inputdata.lName}</h1>
                <h1>{inputdata.mName}</h1>
                <h1>{inputdata.email}</h1>
                <h1>{inputdata.password}</h1>
                <h1>{inputdata.confirmpassword}</h1>
                <h1>{inputdata.date}</h1>
                <h1>{inputdata.address}</h1>
            </div>

    );
};


export default Fifteenth;