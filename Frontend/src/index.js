import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { store } from './state/index';  // Import the store from store.js

// Set up listeners for the API slice
setupListeners(store.dispatch);

// Create the root element for React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Set the document title
document.title = 'gospel_church';
