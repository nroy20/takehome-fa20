import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      inputValue: "",
    }
  }

  addRestaurant = () => {
    var restaurantName = this.state.inputValue;
    if (restaurantName) {
      var newRestaurant = {
        id: this.state.restaurants.length + 1,
        name: restaurantName,
        rating: 0,
      }
      this.setState((prevState) => ({
        restaurants: [...prevState.restaurants, newRestaurant]
      }))
    }
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Instructions complete={true} />
        <h1>Restaurant Ratings</h1>
        {this.state.restaurants.map(x => (
          <div>
          <Restaurant id={x.id} name={x.name} rating={x.rating} /> 
          <Counter count={x.rating} />
          </div>
        ))}
        <h2>
          <u><em>Add New Restaurant</em></u>
        </h2>
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/> 
        <button type="button" onClick={this.addRestaurant}> Submit </button>
      </div>
    )
  }
}

export default App
