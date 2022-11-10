import React, {Component} from "react";


export class Classwork3 extends Component{
    render(){
        return(
            
                <button className={this.props.className} onClick={this.props.onClick}>{this.props.btnName}</button>
        
        )
    }
}

export default Classwork3