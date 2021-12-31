import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4Ww16O2JwFY2x473lkfJO_jqTezkJ3yE",
  authDomain: "coderhouse-reactjs-ef8a2.firebaseapp.com",
  projectId: "coderhouse-reactjs-ef8a2",
  storageBucket: "coderhouse-reactjs-ef8a2.appspot.com",
  messagingSenderId: "16322218230",
  appId: "1:16322218230:web:51b5dfab0d2feb95e684d7"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
