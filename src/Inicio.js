import React from "react";

function Inicio({ eventos }) {
  return (
    <div className="container">
      <h2>Eventos Disponibles</h2>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            <strong>{evento.nombre}</strong> – {evento.lugar} – {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;
