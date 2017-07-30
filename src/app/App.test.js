import React from 'react';
import chai from 'chai';
import {Button} from 'react-toolbox/lib/button'
import SelectCoin from '../select_coin/SelectCoin.js'
import VendingMachine from '../vending_machine/VendingMachine'


// app components
import App from './App';

// helpers
import Products from '../helpers/products'

var should = chai.should();

describe('App Component', () => {
  let app,
    selectCoin,
    selectProduct,
    vendingMachine,
    props

    beforeEach('set props', () => {
      props = {
        initialState: this.state,
      }
    })

  beforeEach('setup App Component', () => {
    app = App(props)
    vendingMachine = VendingMachine(props)
  })

  it('should exist', () => {
    app.should.exist
  });

  it('adds money when they insert a coin', () => {

  })
})

