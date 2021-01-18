import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/configure';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fff3e0;
  }
`

const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
  ;
