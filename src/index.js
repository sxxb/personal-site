import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css'

import Main from './components/Main'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
      <Main />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
