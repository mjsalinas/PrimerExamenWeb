import React, { useState } from "react";

function AgregarEvento() {
  const [form, setForm] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTipoMensaje("success");
    setMensaje(`Evento '${form.nombre}' agregado correctamente`);

    // Limpiar el formulario
    setForm({ nombre: "", lugar: "", fecha: "" });
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Evento</h2>

      {mensaje && (
        <div className={`alert alert-${tipoMensaje}`} role="alert">
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lugar</label>
          <input
            type="text"
            className="form-control"
            name="lugar"
            value={form.lugar}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarEvento;

