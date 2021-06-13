import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './StoreData.js';
ReactDOM.render(
  <ProductProvider>
    <BrowserRouter><App /></BrowserRouter>
  </ProductProvider>,
  document.getElementById('app'));
