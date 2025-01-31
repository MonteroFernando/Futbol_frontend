import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);  // para guardar los datos del usuario
  const [loading, setLoading] = useState(true);    // Para manejar el estado de carga
  const [error, setError] = useState('');          // Para manejar errores

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('userEmail');  // Obtener el email desde localStorage
      if (!email) {
        setError("No se encontró el email en el almacenamiento local");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:5001/jugador/get', {
          method: 'POST',  // Usamos POST para enviar el email
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })  // Enviamos el email en el cuerpo
        });

        if (!response.ok) {
          throw new Error('No se pudo obtener los datos del usuario');
        }

        const data = await response.json();
        setUserData(data);  // Guardamos los datos recibidos en el estado
      } catch (err) {
        setError(err.message);  // Si ocurre un error, lo almacenamos
      } finally {
        setLoading(false);  // Dejamos de estar en estado de carga
      }
    };

    fetchUserData();
  }, []);  // El useEffect se ejecuta solo una vez al cargar el componente

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Si los datos del usuario están disponibles, los mostramos
  if (userData) {
    return (
      <div className="profile-container">
        <h2>Perfil de Usuario</h2>
        <div className="profile-info">
          <p><strong>Nombre:</strong> {userData.nombre}</p>
          <p><strong>Correo:</strong> {userData.email}</p>
          <p><strong>Edad:</strong> {userData.edad}</p>
          <p><strong>Nivel de Habilidad:</strong> {userData.nivel_habilidad}</p>
        </div>
        <button className="edit-profile-button">Editar Perfil</button>
      </div>
    );
  }

  return null;  // Si no hay datos, no renderiza nada
};

export default Profile;