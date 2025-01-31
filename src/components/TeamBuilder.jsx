import React from 'react';
import '../styles/TeamBuilder.css';

const TeamBuilder = () => {
  return (
    <div className="teambuilder-container">
      <h2>Armador de Equipos</h2>
      <div className="teambuilder-form">
        <label htmlFor="team-name">Nombre del Equipo</label>
        <input type="text" id="team-name" placeholder="Nombre del equipo" />

        <label htmlFor="players">Jugadores</label>
        <select id="players" multiple>
          <option value="player1">Jugador 1</option>
          <option value="player2">Jugador 2</option>
          <option value="player3">Jugador 3</option>
          <option value="player4">Jugador 4</option>
          <option value="player5">Jugador 5</option>
        </select>

        <button className="create-team-button">Crear Equipo</button>
      </div>
    </div>
  );
};

export default TeamBuilder;