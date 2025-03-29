import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                if (response.success !== false) {
                    setUsers(response); // Suponemos que es un array
                } else {
                    setErrorMessage(response.message || 'Error al obtener usuarios');
                }
            } catch (error) {
                setErrorMessage('Hubo un problema al cargar los usuarios.');
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    // Estilos en línea
    const tableContainerStyle = {
        margin: '20px auto',
        padding: '20px',
        maxWidth: '1000px',
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '24px',
        color: '#007bff',
        marginBottom: '20px',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const thStyle = {
        backgroundColor: '#007bff',
        color: 'white',
        textTransform: 'uppercase',
        padding: '12px',
        fontSize: '14px',
        borderBottom: '2px solid #ddd',
    };

    const tdStyle = {
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        fontSize: '14px',
        color: '#333',
    };

    const noDataStyle = {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#888',
        padding: '15px',
    };

    return (
        <div style={tableContainerStyle}>
            <h1 style={titleStyle}>Usuarios Registrados</h1>
            {errorMessage && <p style={{ color: 'red', fontSize: '16px', margin: '10px 0' }}>{errorMessage}</p>}
            {isLoading ? (
                <p style={{ color: '#555', fontSize: '16px', fontStyle: 'italic' }}>Cargando usuarios...</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Nombre</th>
                            <th style={thStyle}>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td style={tdStyle}>{user.id}</td>
                                    <td style={tdStyle}>{user.nombre}</td>
                                    <td style={tdStyle}>{user.correo}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={noDataStyle}>
                                    No hay usuarios registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UsersTable;
