import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyByL6Nqo-EkM-Sg7t8Ygz2wX3R5nK_vuuA",
  authDomain: "cualquier-nombre-5dda0.firebaseapp.com",
  projectId: "cualquier-nombre-5dda0",
  storageBucket: "cualquier-nombre-5dda0.appspot.com",
  messagingSenderId: "714730123869",
  appId: "1:714730123869:web:932c42dcb1d9cd754353b4"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
