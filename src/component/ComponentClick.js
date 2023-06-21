import React, { Component } from "react";

//example for the class component
class ComponentClick extends Component {
    
    render(){

     return (
        <div>
        <button onClick = {()=>{console.log("Button clicked from class component")}}>Class Component</button>
        </div>

     );
   } 
}


export default ComponentClick;