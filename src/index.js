import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

import { App } from './Component';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
