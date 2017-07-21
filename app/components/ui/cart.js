import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization,
  cartReducer,
  setCartCurrency
} from 'react-shopping-cart';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

const {getDefaultLocalization} = cartLocalization;

// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
  color: 'Color',
  iPadCase: 'iPad case',
  red: 'Red',
  green: 'Green',
  yellow: 'Yellow',
  GBP: '£',
  EUR: '€',
  USD: '$'
};

const iPadPropertiesWithAdditionalCostLocalization = {
  yellow: 'Yellow (+{cost}{localizedCurrency})'
};

const store = createStore(combineReducers({
  cart: cartReducer,
  // Your own reducers, sir
}));

store.dispatch(setCartCurrency('USD'),);

class App extends PureComponent {

  state = {
    product: {
      name: 'iPadCase',
      id: 'ipad-case',
      path: '/shop/ipad-case/',
      properties: {
        color: [
          'red',
          'green', {
            additionalCost: {
              GBP: 1,
              EUR: 2,
              USD: 3.50
            },
            value: 'yellow'
          }
        ]
      },
      propertiesToShowInCart: ['color'],
      prices: {
        GBP: 70,
        EUR: 80,
        USD: 90
      },
      currency: 'GBP',
      imageSrc: '1-483x321.jpeg'
    },
    getProductLocalization: getDefaultLocalization('product', 'en', {
      ...iPadCaseLocalization,
      ...iPadPropertiesWithAdditionalCostLocalization
    }),
    getCheckoutButtonLocalization: getDefaultLocalization('checkoutButton', 'en', iPadCaseLocalization,),
    getCartLocalization: getDefaultLocalization('cart', 'en', iPadCaseLocalization)
  };

  render() {

    const {product, getCheckoutButtonLocalization, getProductLocalization, getCartLocalization} = this.state;

    const checkoutButtonElement = <CheckoutButton getLocalization={getCheckoutButtonLocalization} checkoutURL="/to/my/checkout"/>;
    return (
      <Provider store={store}>
        <div className="container">
          <Product {...product} checkoutButton={checkoutButtonElement} getLocalization={getProductLocalization}/>
          <Cart checkoutButton={checkoutButtonElement} getLocalization={getCartLocalization}/>
        </div>
      </Provider>
    );
  }
}

export default App;

import {cartActions, cartActionTypes} from 'react-shopping-cart';
