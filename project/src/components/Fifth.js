import React, {Component} from "react";


export class Fifth extends Component{
    constructor (){
        super()
        this.state = {greeting: 'Welcome', msg:'and believe you are going to have a nice time with us  '}
    }

    changemessage=()=>{
        this.setState({greeting:"Goodbye", msg:'to see you again'})
    }

    // changemessage(){
        // this.setState({greeting:"Goodbye", msg:"to see you again"})
    //}

    render(){
        return(
            <div>
                <h1>{this.state.greeting} User, we hope {this.state.msg}</h1>
                <button onClick={this.changemessage}>Log Out</button>
                {/* <button onClick={this.changemessage.bind(this)}Log Out </button> */}

                <button onClick={()=>{this.setState({greeting:"Welcome", msg:"and believe you are going to have a nice time with us"})}}>Login</button>

            </div>
        )
    }
}

export default Fifth