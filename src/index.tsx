import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// initialize the redux store
const store = createStore(reducers, {});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);