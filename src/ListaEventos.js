import React from "react";

function ListaEventos({ eventos }) {
  if (!eventos || eventos.length === 0) {
    return <p>No hay eventos disponibles.</p>;
  }
  return (
    <ul>
      {eventos.map((evento, idx) => (
        <li key={idx}>
          <strong>{evento.nombre}</strong> - {evento.lugar} - {evento.fecha}
        </li>
      ))}
    </ul>
  );
}

export default ListaEventos;