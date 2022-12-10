import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ProgressBar from 'react-scroll-progress-bar'; //Add this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressBar bgcolor="#4857A4" />
    <App />
  </React.StrictMode>
);
