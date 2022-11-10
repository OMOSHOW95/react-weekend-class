import React, {Component} from "react";
import Goodmorning from "./Goodmorning";
import Goodafternoon from "./Goodafternoon";
import Goodevening  from "./Goodevening";


export class Message extends Component {
    render() {
        let msg;
        const time = new Date().getHours();
        if(time < 12){
            msg= <Goodmorning/>
        }else if(time >=12 && time < 16){
            msg = <Goodafternoon/>
        }else if(time >= 16 && time < 20){
            msg = <Goodevening/>
        }
        return (
            <div>
                {msg}
            </div>
        );
    }

}

export default Message;