import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {Button} from 'react-toolbox/lib/button/Button'
import SelectCoin from '../select_coin/SelectCoin.js'
import SelectProducts from '../select_products/SelectProducts.js'
import OrderSummary from "../order_summary/OrderSummary"
import renderer from 'react-test-renderer';

// helpers
import Products from '../helpers/Products'
import Coins from '../helpers/Coins'

describe('Vending Machine Component', () => {
  const mockAddCredit = jest.fn();
  const mockSelectProducts = jest.fn();
  const mockResetOrder = jest.fn();
  const mockConfirmOrder = jest.fn();

  let initialState = {
    credit: 0,
    selected: [],
    confirm: 'no'
  }

  describe('SelectCoin component', () => {
    const component = shallow(
      <SelectCoin
        coins={Coins}
        updateCredit={mockAddCredit}
      />
    );

    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <SelectCoin
          coins={Coins}
          updateCredit={mockAddCredit}
        />
      );
    });
  });

  describe('SelectProduct component', () => {
    const component = shallow(
      <SelectProducts
        products={Products}
        updateCredit={mockSelectProducts}
      />
    );

    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <SelectProducts
          products={Products}
          updateCredit={mockSelectProducts}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Confirm Order Button', () => {
    const component = shallow(
      <Button
        label='Purchase'
        onClick={mockConfirmOrder}
        className="confirmOrder"
      />
    );

    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <Button
          label='Purchase'
          onClick={mockConfirmOrder}
          className="confirmOrder"
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Reset Order Button', () => {
    const component = shallow(
      <Button
        coins={Coins}
        updateCredit={mockResetOrder}
        className="resetOrder"
      />
    );

    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <Button
          coins={Coins}
          updateCredit={mockResetOrder}
          className="resetOrder"
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Order Summary component', () => {
    const component = shallow(
      <OrderSummary
        products={Products}
        selectProducts={mockSelectProducts}
      />
    );

    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <OrderSummary
          products={Products}
          selectProducts={mockSelectProducts}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});