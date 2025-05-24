import React, { useState } from "react";

function AgregarEvento() {
  const [evento, setEvento] = useState({ nombre: "", lugar: "", fecha: "" });
  const [mensaje, setMensaje] = useState("");

  const handleOnChange = (e) => {
    setEvento({
      ...evento,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!evento.nombre || !evento.lugar || !evento.fecha) {
      setMensaje("Por favor, llene todos los campos.");
    } else {
      setMensaje("Evento agregado con éxito.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Evento</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={evento.nombre}
            onChange={handleOnChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lugar</label>
          <input
            type="text"
            name="lugar"
            value={evento.lugar}
            onChange={handleOnChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            value={evento.fecha}
            onChange={handleOnChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>

      {mensaje && (
        <div className="alert alert-info mt-3">
          {mensaje}
        </div>
      )}
    </div>
  );
}

export default AgregarEvento;
