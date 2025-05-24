import React, { useState } from "react";

function Inicio() {
  const [eventos] = useState([
    { nombre: "ReactConf", lugar: "Online", fecha: "2025-06-10" },
    { nombre: "JS Meetup", lugar: "Tegucigalpa", fecha: "2025-07-01" },
  ]);

  return (
    <div className="container">
      <h2>Eventos Disponibles</h2>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            <strong>{evento.nombre}</strong> - {evento.lugar} - {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inicio;