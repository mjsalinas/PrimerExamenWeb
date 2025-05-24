import React, { useState } from "react";

function Inicio() {
  const [eventos] = useState([
    { nombre: "ReactConf", lugar: "Online", fecha: "2025-06-10" },
    { nombre: "JS Meetup", lugar: "Tegucigalpa", fecha: "2025-07-01" },
  ]);

  return (
    <div className="container mt-4">
      <h2>Eventos Disponibles</h2>
      <ul className="list-group">
        {eventos.map((evento, index) => (
          <li key={index} className="list-group-item">
            <strong>{evento.nombre}</strong> - {evento.lugar} - {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;
