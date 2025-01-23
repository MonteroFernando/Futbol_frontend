import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Cuenta creada con éxito');
    // Aquí puedes manejar el envío de datos al backend o realizar otras acciones.
  };

  return (
    <div className="register-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} required />
        <input type="password" name="confirmarContraseña" placeholder="Confirmar Contraseña" onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
