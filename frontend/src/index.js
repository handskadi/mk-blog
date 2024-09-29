import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLsoeEQpn_Ruz12hC-e3oLVisKV61v5Nc",
  authDomain: "elegant-app-projects.firebaseapp.com",
  databaseURL: "https://elegant-app-projects.firebaseio.com",
  projectId: "elegant-app-projects",
  storageBucket: "elegant-app-projects.appspot.com",
  messagingSenderId: "1061830402627",
  appId: "1:1061830402627:web:abda5f79c8a39835b6aaf6",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
