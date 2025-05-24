import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgregarEvento({ addEvento }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
  });

  const [validacion, setValidacion] = useState("");
  const [exito, setExito] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const camposVacios = 
      form.nombre.trim() === "" ||
      form.lugar.trim() === "" ||
      form.fecha.trim() === "";

    if (camposVacios) {
      setValidacion("Por favor, llene todos los campos.");
      setExito("");
      return;
    }

    addEvento({
      nombre: form.nombre,
      lugar: form.lugar,
      fecha: form.fecha,
    });

    setValidacion("");
    setExito("¡Evento agregado con éxito!");

    setForm({
      nombre: "",
      lugar: "",
      fecha: "",
    });

    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="container">
      <h2>Agregar Evento</h2>

      <form onSubmit={handleOnSubmit} className="mb-4">
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleOnChange}
          placeholder="Nombre del evento"
          className="form-control mb-2"
          type="text"
        />

        <input
          name="lugar"
          value={form.lugar}
          onChange={handleOnChange}
          placeholder="Lugar"
          className="form-control mb-2"
          type="text"
        />

        <input
          name="fecha"
          value={form.fecha}
          onChange={handleOnChange}
          placeholder="Fecha"
          className="form-control mb-2"
          type="date"
        />

        {validacion && (
          <div className="text-danger mb-3">{validacion}</div>
        )}

        {exito && (
          <div className="text-success mb-3">{exito}</div>
        )}

        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarEvento;
