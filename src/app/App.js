import React, {Component} from 'react';
import './App.css';
import VendingMachine from '../vending_machine/VendingMachine'
import Products from '../helpers/Products.js'
import Coins from '../helpers/Coins.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: 0,
      selected: [],
      confirm: 'no'
    }
    this.updateCredit = this.updateCredit.bind(this)
    this.selectProducts = this.selectProducts.bind(this)
    this.resetOrder = this.resetOrder.bind(this)
    this.confirmPurchase = this.confirmPurchase.bind(this)
  };

  updateCredit(coin) {
    this.setState({
      credit: this.state.credit += coin.amount
    })
  }

  resetOrder() {
    this.setState({
      selected: [],
      credit: 0
    })
  }

  selectProducts(product) {
    return this.state.credit < product.cost ?
      alert('There is not enough credit!')
      :
      this.setState({
        credit: this.state.credit -= product.cost,
        selected: [...product]
      })
  }

  confirmPurchase() {
    this.setState({
      confirm: 'yes'
    })
  }

  render() {
    return (
      <div className="App">
        <VendingMachine
          userCredit={this.state.credit}
          currentOrder={this.state.selected}
          confirmationStatus={this.state.confirm}
          products={Products} coins={Coins}
          addCredit={this.updateCredit}
          addProduct={this.selectProducts}
          resetOrder={this.resetOrder}
          confirmOrder={this.confirmPurchase}
        />
      </div>
    );
  }
}

export default App;
