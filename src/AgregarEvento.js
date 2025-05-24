import React, { useState } from "react";

function AgregarEvento() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    lugar: '',
    fecha: ''
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // aqui se va comprobar si el formulario está vacío
    if (!formulario.nombre || !formulario.lugar || !formulario.fecha) {
      setError("Por favor, complete todos los campos.");
      setMensaje("");
      return;
    }

    // Si Dios lo permite...
    setError("");
    console.log("Evento capturado:", formulario);
    setMensaje("Evento agregado con éxito.");
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Evento</h2>

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          value={formulario.nombre}
          onChange={handleOnChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={formulario.lugar}
          onChange={handleOnChange}
          className="form-control mb-2"
        />
        <input
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={handleOnChange}
          className="form-control mb-2"
        />
        <button className="btn btn-primary">Agregar</button>
      </form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
    </div>
  );
}

export default AgregarEvento;
