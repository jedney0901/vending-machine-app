import React, {Component} from 'react';
import { Button } from 'react-toolbox/lib/button/Button'

class SelectCoin extends Component {

  render() {
    return (
      <div>
        {this.props.coins.map((coin, i) => <Button key={i} onClick={() => this.props.updateCredit(coin)}> {coin.type} </Button>)}
      </div>
    );
  }
}

export default SelectCoin;
