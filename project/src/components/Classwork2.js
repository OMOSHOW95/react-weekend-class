import React,{Component} from "react";


export class Classwork2 extends Component{
    constructor (){
        super()
        this.state = {count:0}
    } 
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
                <button onClick={()=>{this.setState({count:this.state.count-1})}}>Decrement</button>


                {/* <button onClick={()=>{this.setState({count:this.state.count-1})}}btnName="Decrement"/> */}



            </div>
        )

    }
}


export default Classwork2