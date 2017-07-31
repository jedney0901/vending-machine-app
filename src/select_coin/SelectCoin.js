import React, {Component} from 'react';
import {Button} from 'react-toolbox/lib/button/Button'

let btnStyles = {
  height: '40px',
  width: '60px',
  backgroundColor: '#262626',
  borderRadius: '10px',
  color: 'white',
  margin: '20px'
}

class SelectCoin extends Component {

  render() {
    return (
      <div>
        {
          this.props.coins.map((coin, i) =>
            <Button style={btnStyles} key={i} onClick={() => this.props.updateCredit(coin)}> {coin.type} </Button>
          )
        }
      </div>
    );
  }
}

export default SelectCoin;
