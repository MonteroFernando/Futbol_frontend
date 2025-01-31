import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa las herramientas de enrutamiento
import Login from './components/Login'; // Importa el componente Login
import Register from './components/Register'; // Importa el componente Register
import Dashboard from './components/Dashboard'; // Importa el componente Dashboard
import Profile from './components/Profile'; // Importa el componente Profile
import TeamBuilder from './components/TeamBuilder'; // Importa el componente TeamBuilder
import Matches from './components/Matches'; // Importa el componente Matches
import Settings from './components/Settings'; // Importa el componente Settings
import './styles/Login.css'; // Importa los estilos para Login
import './styles/Register.css'; // Importa los estilos para Register
import './styles/Dashboard.css'; // Importa los estilos para Dashboard
import './styles/Profile.css'; // Importa los estilos para Profile
import './styles/TeamBuilder.css'; // Importa los estilos para TeamBuilder
import './styles/Matches.css'; // Importa los estilos para Matches
import './styles/Settings.css'; // Importa los estilos para Settings

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/" element={<Login />} />

          {/* Ruta para la página de registro */}
          <Route path="/register" element={<Register />} />

          {/* Ruta para el Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Ruta para el Perfil de Usuario */}
          <Route path="/profile" element={<Profile />} />

          {/* Ruta para el Armado de Equipos */}
          <Route path="/teambuilder" element={<TeamBuilder />} />

          {/* Ruta para los Partidos */}
          <Route path="/matches" element={<Matches />} />

          {/* Ruta para la Configuración */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;