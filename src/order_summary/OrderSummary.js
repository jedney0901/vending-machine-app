import React, {Component} from 'react';
import './OrderSummary.css'

class OrderSummary extends Component {

  render() {
    return (
      this.props.selectedProducts.count > 0 ?
        <div className="orderSummary bordered">
          {this.props.selectedProducts.map((product, i) => <li key={i}> {product.name} </li>)}
        </div> :
        <div>
        </div>
    );
  }
}

export default OrderSummary;