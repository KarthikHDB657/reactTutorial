import React, { Component } from "react";

//example for the class component
class Welcome extends Component {
   render(){
     //destructuring of prop statefull components
     const {courseName, courseLvl,children} = this.props;
     return <div><h3> Welcome to {courseName} with level {courseLvl}</h3> {children}</div>;
   } 

}
export default Welcome;