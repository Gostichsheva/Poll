import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routes from './routes';
import * as reducers from './actions';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './style.css';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

// Get Chuck Norris quotes
store.dispatch(reducers.fetchQuotes());

render(
  <Provider store={store}>
      <Router history={browserHistory}>
          { routes }
      </Router>
    </Provider>,
    document.getElementById('app')
);
