import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './redux/stores/store';
import { Provider } from 'react-redux';
import './index.scss';
const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
