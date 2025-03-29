import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await loginUser(email, password);
        if (response.message === 'Login exitoso') {
            setMessage('Login exitoso');
            navigate('/dashboard'); // Redirige al Dashboard
        } else {
            setMessage(response.message || 'Error al iniciar sesión');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Ingresar</button>
            </form>
            {message && <p>{message}</p>}
            {/* Botón para ir al registro */}
            <button onClick={() => navigate('/register')} style={{ marginTop: '20px', backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                ¿No tienes cuenta? Regístrate aquí
            </button>
        </div>
    );
};

export default Login;
