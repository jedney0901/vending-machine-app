import React, {Component} from 'react';
import './App.css';
import VendingMachine from '../vending_machine/VendingMachine'
import OrderSummary from '../order_summary/OrderSummary'
import PickUp from '../pickup/PickUp.js'
import Products from '../helpers/Products.js'
import Coins from '../helpers/Coins.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: {
        credit: 0,
        selected: [],
        spent: 0,
        confirm: 'No'
      }
    }
  };

  render() {
    return (
      <div className="App">
        Hello World
        <VendingMachine userCredit={this.state.currentOrder.credit} products={Products} coins={Coins}/>
        <OrderSummary/>
        <PickUp/>
      </div>
    );
  }
}

export default App;
