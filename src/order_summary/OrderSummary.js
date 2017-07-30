import React, {Component} from 'react';
import './OrderSummary.css'

class OrderSummary extends Component {

  render() {
    return (
      <div>
        {
          this.props.confirmationStatus === 'yes' ?
            <div>Thanks, you have ${this.props.userCredit / 100} remaining!</div>
            :
            <div></div>
        }
      </div>
    )
  }
}

export default OrderSummary;