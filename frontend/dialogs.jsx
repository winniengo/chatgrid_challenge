import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import configureStore from './store';
import DialogsContainer from './components/dialogs/container.js';


const App = ({ store }) => (
  <Provider store={store}>
    <DialogsContainer />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = { // dummy files for testing
    "dialogs": [
      "hey",
      "what's up",
      "hello"
    ]
  }

  const store = configureStore(preloadedState);
  const appElement = document.getElementById('index');
  Modal.setAppElement(appElement);
  ReactDOM.render(<App store={store} />, appElement);
  
  window.store = store; // TODO
});
