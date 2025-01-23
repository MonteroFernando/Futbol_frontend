import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa las herramientas de enrutamiento
import Login from './components/Login'; // Importa el componente Login
import Register from './components/Register'; // Importa el componente Register
import Dashboard from './components/Dashboard'; // Importa el componente Dashboard
import './styles/Login.css'; // Importa los estilos para Login
import './styles/Register.css'; // Importa los estilos para Register

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
          <Route path="/register" element={<Register />} /> {/* Ruta para la página de registro */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el entorno del usuario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

