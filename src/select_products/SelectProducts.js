import React, {Component} from 'react';
import { Button } from 'react-toolbox/lib/button/Button'

class SelectProducts extends Component {

  render() {
    return (
      <div>
        {this.props.products.map((product, i) => <Button key={i} onClick={() => this.props.selectProducts(product)}> {product.name} </Button>)}
      </div>
    );
  }
}

export default SelectProducts;
