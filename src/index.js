import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import { createStore, combineReducers } from 'redux';
import * as reducers from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './style.css';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      { routes }
    </Router>
    </Provider>,
    document.getElementById('app')
);
