import React from "react";

function Inicio({ eventos }) {
  if (!eventos || !Array.isArray(eventos) || eventos.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Eventos Disponibles</h2>
        <div className="alert alert-info">No hay eventos disponibles.</div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Eventos Disponibles</h2>
      <ul className="list-group">
        {eventos.map((evento, idx) => (
          <li className="list-group-item" key={idx}>
            <strong>{evento.nombre}</strong> - {evento.lugar} - {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;