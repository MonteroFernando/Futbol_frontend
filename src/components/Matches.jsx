import React from 'react';
import '../styles/Matches.css';

const Matches = () => {
  return (
    <div className="matches-container">
      <h2>Partidos</h2>
      <div className="matches-list">
        <div className="match-card">
          <h3>Partido 1</h3>
          <p><strong>Fecha:</strong> 2023-10-15</p>
          <p><strong>Resultado:</strong> 3-2</p>
        </div>
        <div className="match-card">
          <h3>Partido 2</h3>
          <p><strong>Fecha:</strong> 2023-10-20</p>
          <p><strong>Resultado:</strong> 1-1</p>
        </div>
      </div>
    </div>
  );
};

export default Matches;