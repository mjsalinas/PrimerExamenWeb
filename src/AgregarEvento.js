import React, { useState } from "react";

function AgregarEvento() {
  const [evento, setEvento] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
  });

  const [mensaje, setMensaje] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEvento((prev) => ({ ...prev, [name]: value }));
  };
  const enviarFormulario = (e) => {
    e.preventDefault(); 
    console.log("Evento agregado:", evento);

    setMensaje("✅ Evento agregado con éxito!");
    setEvento({ nombre: "", lugar: "", fecha: "" });
  };

  return (
    <div className="container">
      <h2>Agregar Evento</h2>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          value={evento.nombre}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={evento.lugar}
          onChange={handleOnChange}
        />
        <input
          type="date"
          name="fecha"
          value={evento.fecha}
          onChange={handleOnChange}
        />
        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default AgregarEvento;
