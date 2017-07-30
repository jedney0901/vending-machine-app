import React, {Component} from 'react';
import './VendingMachine.css'
import { Button } from 'react-toolbox/lib/button/Button'
import SelectCoin from '../select_coin/SelectCoin.js'
import SelectProducts from '../select_products/SelectProducts.js'

class VendingMachine extends Component {

  render() {
    return (
      <div className="vendingMachine bordered">
        Hi there, please enter the coins you currently have. {this.props.userCredit}
        <SelectCoin coins={this.props.coins} updateCredit={this.props.addCredit}/>
        <SelectProducts products={this.props.products} selectProducts={this.props.addProduct}/>
        {/*Need to add in confirmPurchase functionality*/}
        <Button label='Purchase' onClick={this.props.confirmPurchase}/>
      </div>
    );
  }
}

export default VendingMachine;
