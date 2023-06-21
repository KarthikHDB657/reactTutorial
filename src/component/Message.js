import React, { Component } from "react";

//example for the class component
class Message extends Component {
    
    constructor(){
     super();
     this.state = {
        Message : 'Welcome to React'
     }

    }

    changeMessage(){
        this.setState({
            Message: 'Thanks for subscribing react course'
        })
    }
    render(){

     return (
        <div>
        <h3> {this.state.Message} </h3>
        <button onClick={() => this.changeMessage()}>Subscribe Course</button>
        </div>

     )
   } 

}
export default Message;