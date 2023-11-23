import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Provider} from "react-redux";
import store from "./store/store";
import "@fontsource/almarai"; // Defaults to weight 400
import "@fontsource/almarai/400.css"; // Specify weight
ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
  <React.StrictMode>
    <App />
      </React.StrictMode>

      </Provider>
);
