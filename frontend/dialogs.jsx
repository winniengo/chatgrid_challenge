import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import configureStore from './store';
import App from './components/app';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { // dummy files for testing
    dialogs: {
      index: ['hey', 'whats up', 'hello']
    }
  }

  const store = configureStore(preloadedState);
  const appElement = document.getElementById('index');
  Modal.setAppElement(appElement);
  ReactDOM.render(<Root store={store} />, appElement);

  window.store = store; // TODO
});
