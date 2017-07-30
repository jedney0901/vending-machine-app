import React from 'react';
import chai from 'chai';

// app components
import App from '../app/App';
import VendingMachine from '../vending_machine/VendingMachine'

// helpers
import Products from '../helpers/Products'
import Coins from '../helpers/Coins'

var expect = chai.expect();


describe('App Component', () => {
  let app,
    vendingMachine,
    props,
    addCredit,
    addProduct,
    resetOrder,
    confirmOrder,
    products,
    initialState,
    stateSoFar

  beforeEach('set state', () => {
    initialState = {
      credit: 0,
      selected: [],
      confirm: 'no'
    }
  });

  beforeEach('set props', () => {
    props = {
      addCredit,
      addProduct,
      resetOrder,
      confirmOrder,
      products: Products,
      coins: Coins
    }
  });

  beforeEach('setup App Component', () => {
    app = App(initialState)
    vendingMachine = VendingMachine(props)
  })

  it('App component should exist', () => {

  });

  describe('Vending Machine Component unit tests', () => {

    it('should have available currency as props', () => {
      expect(vendingMachine.props.products.to.equal(this.props.products))
    });

    it('should have available products as props', () => {

    });

    it('should have state as props', () => {

    });
  })
})

