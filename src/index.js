// ------ Libraries -----------------
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// -------- Data ----------------------
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'
// Render method
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


