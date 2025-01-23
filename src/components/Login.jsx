import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí podrías validar las credenciales antes de redirigir
    navigate('/dashboard'); // Redirige al Dashboard
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">⚽ Bienvenido a Duck`sFutbol ⚽</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" required />

          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" required />

          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
        <p className="register-link">
          ¿No tienes cuenta? <a href="/register">Crear Cuenta</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
