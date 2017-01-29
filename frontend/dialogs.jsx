import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
  window.store = store; // TODO
  ReactDOM.render(<App store={store} />, document.getElementById('index'));
});
