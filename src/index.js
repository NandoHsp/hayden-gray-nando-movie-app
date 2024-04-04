//index.js is the entry point for the app. It is the first file that is run when the app starts. The root of our app.
//The first component that gets rendered from this root is our App component.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./scss/styles.scss";
import App from './App'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


