import React from "react";

//Example for JSX
const Hello = () => {
    // return(
    //     <div>
    //         <h4> Hello React </h4>
    //     </div>
    // )
    //without using jsx
    return React.createElement('div',{id:'Hello',className:'React'},React.createElement('h1',null,"Hello React"))
}
export default Hello;