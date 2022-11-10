import React, {Component} from "react";
import './Eighth.css';
import Classwork3 from "./Classwork3";

export class Eighth extends Component{
    constructor(){
        super()
        this.state= {fName:'', lName:'', email: '', password:'', Address:'',mName:'', age:''}
    }


    render(){
        return(
            <div className="form">
                <form action="">
                    <div className="group">
                        <div className="group1">
                            <div className="form-group">
                                <input type="text" placeholder="First Name" value={this.state.fName} onChange={(event)=>{this.setState({fName:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" value={this.state.lName} onChange={(event)=>{this.setState({lName:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} />
                            </div>

                        </div>

                        <div className="group2">
                            <div className="form-group">
                                <input type="password" placeholder="password"value={this.state.password}onChange={(event)=>{this.setState({password:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="date" placeholder="Age" value={this.state.age} onChange={(event)=>{this.setState({age:event.target.value})}} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Address" value={this.state.Address} onChange={(event)=>{this.setState({Address:event.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Middle Name"value={this.state.mName} onChange={(event)=>{this.setState({mName:event.target.value})}}/>
                            </div>
                            
                        </div>
                        <div className="btn-group">

                        </div>

                        

                    </div>
                    <Classwork3 btnName="Submit" className='form-btn'/>
                </form>

                <h1>{this.state.fName}</h1>
                <h1>{this.state.lName}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.Address}</h1>
                <h1>{this.state.age}</h1>
            </div>
        );
     }
}



export default Eighth;