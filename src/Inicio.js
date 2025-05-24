import React, { useState } from "react";
import ListaEventos from "./ListaEventos";

function Inicio() {
  const [eventos] = useState([
    { nombre: "ReactConf", lugar: "Online", fecha: "2025-06-10" },
    { nombre: "JS Meetup", lugar: "Tegucigalpa", fecha: "2025-07-01" },
  ]);

  return (
    <div className="container mt-4">
      <h2>Eventos Disponibles</h2>
      <ListaEventos eventos={eventos} />
    </div>
  );
}

export default Inicio;
