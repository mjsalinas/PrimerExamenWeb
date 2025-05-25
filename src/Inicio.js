import React, { useState } from "react";

function Inicio() {
  const [eventos] = useState([
    { nombre: "ReactConf", lugar: "Online", fecha: "2025-06-10" },
    { nombre: "JS Meetup", lugar: "Tegucigalpa", fecha: "2025-07-01" },
  ]);


  return (
    <div className="container mt-4"> 
      <h2 className="ext-center mb-4">Eventos Disponibles</h2>
      <div className="row">
        {eventos.map((evento, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{evento.nombre}</h5>
                <p className="card-text">
                  <strong>Lugar:</strong> {evento.lugar}
                </p>
                <p className="card-text">
                  <strong>Fecha:</strong> {evento.fecha}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;