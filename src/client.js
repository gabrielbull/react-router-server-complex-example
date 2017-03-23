import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { preload, ServerStateProvider } from 'react-router-server';
import App from './app';

preload(__INITIAL_MODULES__)
  .then(() => {
    render((
      <ServerStateProvider state={__INITIAL_STATE__}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ServerStateProvider>
    ), document.getElementById('main'));
  });
