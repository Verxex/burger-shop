import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './css/style.css';
//import Router from './components/Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
