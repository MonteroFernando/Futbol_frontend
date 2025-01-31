import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    
    try {
      const response = await fetch('http://127.0.0.1:5001/jugador/get', {
        method: 'POST',  // Usar POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })  // Enviar solo el email
      });

      if (!response.ok) {
        throw new Error('Usuario no encontrado');
      }

      const data = await response.json();
      
      console.log(data.password)
      // Verificar si el JSON recibido tiene la contraseña y compararla
      if (data.password && data.password === password) {
        navigate('/dashboard'); // Redirigir si la contraseña es correcta
      } else {
        console.log("Cotraseña equivocada")
        setError('Contraseña incorrecta');
        alert("CONTRASEÑA INCORRECTA")
      }
    } catch (err) {
      console.log("Error en la solicitud:", err)
      setError(err.message);
      alert(err)
    }
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
