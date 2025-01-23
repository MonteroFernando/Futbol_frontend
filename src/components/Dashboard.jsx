// src/components/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bienvenido al Entorno del Jugador ⚽</h1>
        <button className="logout-button">Cerrar sesión</button>
      </header>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <ul>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Estadísticas</a></li>
            <li><a href="#">Partidos</a></li>
            <li><a href="#">Configuraciones</a></li>
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
