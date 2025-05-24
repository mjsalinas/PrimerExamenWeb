import React, { useState } from "react";

function AgregarEvento() {
  const [eventos, setEventos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success"); 

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();


    if (!form.nombre.trim() || !form.lugar.trim() || !form.fecha.trim()) {
      setTipoMensaje("error");
      setMensaje("Por favor, complete todos los campos antes de agregar el evento.");
      return;
    }

    setEventos([...eventos, form]);
    setTipoMensaje("success");
    setMensaje(`Evento '${form.nombre}' agregado correctamente`);
    setForm({
      nombre: "",
      lugar: "",
      fecha: "",
    });

    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

  return (
    <div className="container">
      <h2>Agregar Evento</h2>
      <form onSubmit={handleOnSubmit} className="mb-4">
        <input name="nombre" value={form.nombre} onChange={handleOnChange} placeholder="Nombre del evento" className="form-control mb-2"/>
        <input name="lugar" value={form.lugar} onChange={handleOnChange} placeholder="Lugar" className="form-control mb-2"/>
        <input type="date" name="fecha" value={form.fecha} onChange={handleOnChange} className="form-control mb-2"/>
        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </form>

      {mensaje && (
        <div
          className={ tipoMensaje === "success" ? "alert alert-success"  : "alert alert-danger" }
          role="alert"
        >
          {mensaje}
        </div>
      )}
    </div>
  );
}

export default AgregarEvento;
