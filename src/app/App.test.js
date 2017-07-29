import React from 'react';
import chai from 'chai';
import mocha from 'mocha'
import {Button} from 'react-toolbox/lib/button'

// app components
import App from './App';

// helpers
import Products from '../helpers/products'

var should = chai.should();


describe('App components', () => {
  let coinButtons,
    props,
    initialState,
    stateSoFar,
    app,
    Products

  beforeEach('set initial state', () => {
    initialState = {
      credit: 0,
      selected: "some selected state",
      spent: 0
    }
  });

  beforeEach('set props', () => {
    props = {
      products: Products
    }
  })

  beforeEach('setup components', () => {
    app = App(props, initialState)
    coinButtons = Button(this.state, Button)
  })

  describe('App Components should exist', () => {
    coinButtons.should('exist', () => {

    })
  })
});
