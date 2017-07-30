import React, {Component} from 'react';
import { Button } from 'react-toolbox/lib/button/Button'

let btnStyles = {
  height:'40px',
  width:'60px',
  backgroundColor:'#F3C719',
  borderRadius:'10px',
  margin: '20px'
}

class SelectProducts extends Component {

  render() {
    return (
      <div>
        {this.props.products.map((product, i) => <Button style={btnStyles} key={i} onClick={() => this.props.selectProducts(product)}> {product.name} ${product.cost/100} </Button>)}
      </div>
    );
  }
}

export default SelectProducts;
