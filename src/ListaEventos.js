// src/ListaEventos.js
import React from "react";

function ListaEventos({ eventos }) {
  if (!eventos || eventos.length === 0) {
    return <p>No hay eventos para mostrar.</p>;
  }

  return (
    <ul className="list-group">
      {eventos.map((evento, index) => (
        <li key={index} className="list-group-item">
          <strong>{evento.nombre}</strong> - {evento.lugar} - {evento.fecha}
        </li>
      ))}
    </ul>
  );
}

export default ListaEventos;
