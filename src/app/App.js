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
      selectedCurrency: [],
      credit: 0,
      totalValue: [],
      selected: ['hello'],
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
    })
  }

  selectProducts(product) {
    return this.state.credit < product.cost ?
      alert('There is not enough credit!')
      :
      this.setState({
        selected: this.state.selected.push(product)
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
        Hello World
        <VendingMachine
          userCredit={this.state.credit}
          products={Products} coins={Coins}
          add
          addCredit={this.updateCredit}
          addProduct={this.selectProducts}
          resetOrder={this.resetOrder}
        />
        <OrderSummary
          selectedProducts={this.state.selected}
        />
        <PickUp/>
      </div>
    );
  }
}

export default App;
