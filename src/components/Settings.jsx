import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Configuración</h2>
      <form className="settings-form">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" placeholder="Correo electrónico" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="Contraseña" />

        <button type="submit" className="save-settings-button">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default Settings;