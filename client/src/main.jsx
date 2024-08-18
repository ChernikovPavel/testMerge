import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// Импортируйте весь JS Bootstrap "bootstrap/scss/bootstrap"
// import * as bootstrap from "bootstrap";

// Импортируйте наш пользовательский CSS
import "./scss/styles.scss";


createRoot(document.getElementById('root')).render(
  <div className="container-fluid">
    <App />
  </div>
);
