import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getUsers(); // Llama a la función para obtener usuarios
        console.log('Respuesta al obtener usuarios:', response); // Mensaje de depuración

        if (response.success !== false) {
            setUsers(response); // Asume que `response` es un array de usuarios
        } else {
            setErrorMessage(response.message || 'Error al cargar usuarios');
            console.error('Error al obtener usuarios:', response.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="dashboard">
            <h1>Usuarios Registrados</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Muestra errores */}
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.correo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Dashboard;
