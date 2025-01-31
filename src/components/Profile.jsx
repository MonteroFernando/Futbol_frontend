import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <div className="profile-info">
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Correo:</strong> juan.perez@example.com</p>
        <p><strong>Edad:</strong> 25</p>
        <p><strong>Posición:</strong> Delantero</p>
      </div>
      <button className="edit-profile-button">Editar Perfil</button>
    </div>
  );
};

export default Profile;