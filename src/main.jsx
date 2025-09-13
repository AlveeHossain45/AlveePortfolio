import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <-- এই লাইনটি 'App.jsx' থেকে default export ইম্পোর্ট করে
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);