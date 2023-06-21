import React from 'react';

//Example for stateless component
// function Greet() {
 
//    return <h1> Hello Karthik</h1>;
// }
//using ES6 using first way of destructuring props and state
// const Greet = ({name,heroName,children}) => { 

//     return(<div> <h1> Hello {name} also Known as {heroName}</h1>
//  {children}
// </div>)} 

//2nd way of destructuring 
const Greet = props => {
    const {name,heroName,children} = props;
    return(<div> <h1> Hello {name} also Known as {heroName}</h1>
 {children}
 </div>)
 }


export default Greet;