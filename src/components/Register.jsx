import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await registerUser(nombre, email, password);
        if (response.message === 'Usuario creado con éxito') {
            setMessage('Usuario registrado con éxito. Redirigiendo al login...');
            setTimeout(() => navigate('/'), 2000); // Redirige al login después de 2 segundos
        } else {
            setMessage(response.message || 'Hubo un problema al registrar el usuario.');
        }
    };

    return (
        <div className="register-container">
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
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
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
