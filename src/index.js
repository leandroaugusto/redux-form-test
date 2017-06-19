import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './data/Reducers';
import Routes from './config/Routes';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

let store = createStore(App);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
