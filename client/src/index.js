import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers, stores } from './reducers';
import App from './App';
import Login from "./components/Login/index.js";
import Register from "./components/Register/index.js";
import './index.css';
import history from "./history";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
