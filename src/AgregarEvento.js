import React, { useState } from "react";

function AgregarEvento() {
  const [evento, setEvento] = useState({
    nombre: "",
    lugar: "",
    fecha: ""
  });
  const [mensaje, setMensaje] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEvento(prev => ({ ...prev, [name]: value }));
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!evento.nombre || !evento.lugar || !evento.fecha) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }
    setMensaje(`Evento ${evento.nombre} agregado correctamente`);
    // Aquí podrías agregar lógica para guardar el evento
    console.log("Evento agregado:", evento);
  };

  return (
    <div className="container">
      <h2 className="form-label mb-3">Agregar Evento</h2>
      <form onSubmit={enviarFormulario}>
        <input 
          className="form-control mb-2"
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          value={evento.nombre}
          onChange={handleOnChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={evento.lugar}
          onChange={handleOnChange}
        />
        <input
          className="form-control mb-2"
          type="date"
          name="fecha"
          placeholder="Fecha"
          value={evento.fecha}
          onChange={handleOnChange}
        />
        <button type="submit" className="btn btn-success">Agregar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default AgregarEvento;