import React, {Component} from "react";


export class Fourth extends Component{
    render() {
        let msg;
        const time = new Date().getHours();
        if(time < 12){
            msg='Good Morning'
        }else if(time >=12 && time < 16){
            msg = 'Good Afternoon'
        }else if(time >= 16 && time < 20){
            msg = 'Good Evening'
        }else{
            msg ='Good Night'
        }
        return (
            <div>
                <h1>{msg}</h1>
            </div>
        )


    }


}







export default Fourth