import React, {Component} from 'react';
import './VendingMachine.css'
import { Button } from 'react-toolbox/lib/button/Button'
import SelectCoin from '../select_coin/SelectCoin.js'
import SelectProducts from '../select_products/SelectProducts.js'
import OrderSummary from "../order_summary/OrderSummary";

let textStyles = {
  color: '#70C5CA',
};

let btnStyles = {
  margin: '20px',
  backgroundColor: 'black',
  color: 'white'
};

class VendingMachine extends Component {

  render() {
    return (
      <div
        className="vendingMachine"
        style={textStyles}
      >
        Hi there, welcome to your healthy vending machine, enter your coins in to proceed.
        <SelectCoin
          coins={this.props.coins}
          updateCredit={this.props.addCredit}
        />
        Your current credit is ${this.props.userCredit/100}, please choose your product's once you have enough credit.
        <SelectProducts
          products={this.props.products}
          selectProducts={this.props.addProduct}
        />
        <Button
          style={btnStyles}
          label='Purchase'
          onClick={this.props.confirmOrder}
        />
        <Button
          style={btnStyles}
          label='Reset'
          onClick={this.props.resetOrder}
        />
        <OrderSummary
          confirmationStatus={this.props.confirmationStatus}
          userCredit={this.props.userCredit}
        />
      </div>
    );
  }
}

export default VendingMachine;
