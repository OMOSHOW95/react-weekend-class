import React,{Component} from "react";
import './Third.css';

class Third extends Component{
    render(){
        return(
        <div>
            <div className="test">
                <div className="text-con">
                    <div className="img">
                        <img src="../../image 8.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.bio}</p>
                    </div>
                </div>

                <div className="desc">
                    <p>{this.props.desc}</p>
                    <div className="btn-group">
                        <button>click me</button>
                        <button>Click me</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default Third