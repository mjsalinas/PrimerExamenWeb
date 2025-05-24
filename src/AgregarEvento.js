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

    if (!formulario.nombre || !formulario.lugar || !formulario.fecha) {
      setError("Por favor, complete todos los campos.");
      setMensaje("");
      return;
    }

    setError("");
    console.log("Evento capturado:", formulario);
    setMensaje("Evento agregado con éxito.");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4>Agregar Evento</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre del evento</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleOnChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Lugar</label>
                  <input
                    type="text"
                    name="lugar"
                    value={formulario.lugar}
                    onChange={handleOnChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fecha</label>
                  <input
                    type="date"
                    name="fecha"
                    value={formulario.fecha}
                    onChange={handleOnChange}
                    className="form-control"
                  />
                </div>
                <div className="d-grid">
                  <button className="btn btn-success">Agregar</button>
                </div>
              </form>

              {error && <div className="alert alert-danger mt-3">{error}</div>}
              {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarEvento;
