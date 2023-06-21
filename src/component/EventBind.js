import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello Event Bind'
      }

      // this method using bind inside the constructor is preffered one(used in third jsx binding method) 
      // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //   this.setState({
    //     message: 'Good Bye!'
    //   })
    // }
    clickHandler = () =>{
      this.setState({
        message: 'Good Bye!'
      })
    }
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
        {/* first approach using bind func directly */}
        {/* <button onClick={this.clickHandler.bind(this)}>
         click Event Bind
        </button> */}
      
        {/*second approach  using arrow function*/}
        {/* <button onClick={() => this.clickHandler()}>
         click Second Event
        </button>  */}
         {/* third approach using bind inside the constructor(preferred one) */}
        {/* <button onClick={this.clickHandler}>Third approach</button> */}

        {/* using fourth method  using arrow function (preferred one)*/}
       <button onClick={this.clickHandler}>fourth Event</button>
      </div>
    )
  }
}

export default EventBind