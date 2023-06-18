import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from "./infrastructure/router/main-router";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./infrastructure/assets/styles/utils.scss";
import "./infrastructure/assets/styles/theme.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MainRouter/>
    </React.StrictMode>,
)
