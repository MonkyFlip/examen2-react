import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Verifica el token
    console.log('Validación del token en ProtectedRoute:', token);

    if (!token) {
        return <Navigate to="/" replace />; // Redirige si no hay token
    }

    return children; // Renderiza el componente hijo si hay token
};

export default ProtectedRoute;
