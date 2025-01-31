// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importa useNavigate y Link
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook para la navegación programática

  const handleLogout = () => {
    // Lógica para cerrar sesión (puedes limpiar el estado, eliminar tokens, etc.)
    navigate('/'); // Redirige al usuario a la página de Login
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bienvenido al Entorno del Jugador ⚽</h1>
        <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
      </header>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <ul>
            {/* Enlaces a las nuevas páginas usando <Link> de react-router-dom */}
            <li>
              <Link to="/profile">Perfil</Link> {/* Enlace a la página de Perfil */}
            </li>
            <li>
              <Link to="/teambuilder">Armar Equipo</Link> {/* Enlace a la página de Armado de Equipos */}
            </li>
            <li>
              <Link to="/matches">Partidos</Link> {/* Enlace a la página de Partidos */}
            </li>
            <li>
              <Link to="/settings">Configuraciones</Link> {/* Enlace a la página de Configuración */}
            </li>
          </ul>
        </aside>

        <main className="dashboard-main">
          <h2>Últimos Resultados</h2>
          <div className="stats-card">
            <h3>Partidos Recientes</h3>
            {/* Aquí agregarías los datos o componentes para mostrar los resultados */}
          </div>
          {/* Puedes agregar más tarjetas o secciones aquí */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;