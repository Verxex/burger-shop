import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
