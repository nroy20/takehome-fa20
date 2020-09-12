import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }
  
  render() {
    return (
      <div>
        <label>Rating: </label>{this.state.count}
        <div> 
          <label> Change Rating: </label>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div> 
    )
  }
}

export default Counter
