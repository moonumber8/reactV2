import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
