import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';

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
      <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
  ;
