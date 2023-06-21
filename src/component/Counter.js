import React, { Component } from "react";

//example for the class component
class Counter extends Component {
    
    constructor(props){
     super(props);
     this.state = {
        count: 0
     }

    }

    incrementCounter(){
        this.setState( prevState => ({ 
           count : prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();

    }
    render(){

     return (
        <div>
        <h3> {this.state.count} </h3>
        <button onClick={() => this.incrementFive()}>Increment counter to five</button>
        </div>

     )
   } 

}
export default Counter;