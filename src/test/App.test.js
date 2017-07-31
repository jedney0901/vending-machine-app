import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from '../app/App.js';
import renderer from 'react-test-renderer';
import VendingMachine from '../vending_machine/VendingMachine';

// helpers
import Products from '../helpers/Products'
import Coins from '../helpers/Coins'

describe('App Component', () => {
  const mockAddCredit = jest.fn();
  const mockSelectProducts = jest.fn();
  const mockResetOrder = jest.fn();
  const mockConfirmOrder = jest.fn();

  let initialState = {
    credit: 0,
    selected: [],
    confirm: 'no'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('render App component', () => {
    const app = shallow(<App />);

    it('should add update the credit amount', () => {
      const coin = 50
      const expected = initialState.credit += coin;
      const actual = app.updateCredit(coin);

      expect(actual).toEqual(expected);
    });

    it('should reset the order', () => {
      const expected = {
        selected: [],
        credit: 0
      };

      const actual = app.instance().resetOrder();
      expect(actual).toEql(expected);
    });

    it('should select products for their purchase', () => {
      const credit = 0.5
      const expected = alert('There is not enough credit!')
      const actual = app.instance().selectProducts(credit);

      expect(actual).toEqual(expected);
    });
  });

  describe('VendingMachine Component', () => {
    const component = shallow(
      <VendingMachine />
    );

    it('renders and matches our snapshot', () => {
      const component = renderer.create(
        <VendingMachine
          userCredit={initialState.credit}
          CurrentOrder={initialState.selected}
          ConfirmationStatus={initialState.confirm}
          addCredit={mockAddCredit}
          addProduct={mockSelectProducts}
          resetOrder={mockResetOrder}
          confirmOrder={mockConfirmOrder}
          coins={Coins}
          products={Products}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});