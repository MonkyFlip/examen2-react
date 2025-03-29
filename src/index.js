import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa el módulo correcto
import App from './App';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
