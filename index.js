import 'babel/polyfill';

import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from './store/configureStore';

import Products from './containers/Products';
import Stores from './containers/Stores';

const history = new BrowserHistory();
const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path="/" component={Products} />
        <Route name="stores" path="stores" component={Stores} />
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
