import React, { useState } from "react";

function AgregarEvento() {
  const [evento, setEvento] = useState({
    nombre: "",
    lugar: "",
    fecha: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEvento(prev => ({ ...prev, [name]: value }));
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Evento agregado:", evento);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Agregar Evento</h2>
      <form onSubmit={enviarFormulario}>
        <div className="mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre del evento"
            value={evento.nombre}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="lugar"
            className="form-control"
            placeholder="Lugar"
            value={evento.lugar}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={evento.fecha}
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarEvento;