import React, {Component} from 'react';
import './App.css';
import VendingMachine from '../vending_machine/vendingMachine'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: {
        credit: 0,
        selected: 'Please select what vegan bar you would like',
        spent: 0
      }
    }
  };

  render() {
    return (
      <div className="App">
        Hello World
        <VendingMachine />
      </div>
    );
  }
}

export default App;
