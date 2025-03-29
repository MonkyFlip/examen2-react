import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Función para iniciar sesión
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            correo: email,
            password: password,
        });
        return response.data; // Devuelve el mensaje de éxito
    } catch (error) {
        console.error('Error en login:', error.response?.data || error.message);
        return { message: 'Credenciales inválidas' };
    }
};

// Función para obtener usuarios
export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data; // Devuelve la lista de usuarios
    } catch (error) {
        console.error('Error al obtener usuarios:', error.response?.data || error.message);
        return { success: false, message: 'Error al obtener usuarios' };
    }
};

export const registerUser = async (nombre, correo, password) => {
    try {
        const response = await axios.post(`${API_URL}/users`, {
            nombre,
            correo,
            password,
        });
        return response.data; // Devuelve el mensaje de éxito
    } catch (error) {
        console.error('Error al registrar usuario:', error.response?.data || error.message);
        return { success: false, message: 'Error al registrar el usuario.' };
    }
};
