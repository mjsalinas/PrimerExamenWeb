import React, { useState } from "react";

function AgregarEvento() {
  const [editIndex, setEditIndex] = useState(null);
  const [evento, setEvento] = useState([]);
  const [form, setForm] = useState({ nombre: '', lugar: '', fecha: '' });
  const [alerta, setAlerta] = useState("");
  const handleOnChangeInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnEdit = (id) => {
    setForm(evento[id]);
    setEditIndex(id);
    setAlerta("");
  };

  const handleOnDelete = (id) => {
    const actualizados = evento.filter((_, index) => index !== id);
    setEvento(actualizados);
    setAlerta("Evento eliminado.");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.nombre === '' || form.lugar === '' || form.fecha === '') {
      setAlerta("Por favor, llene todos los campos");
      return;
    }

    if (editIndex !== null) {
      const actualizados = [...evento];
      actualizados[editIndex] = form;
      setEvento(actualizados);
      setEditIndex(null);
      setAlerta("Evento actualizado correctamente");
    } else {
      setEvento([...evento, form]);
      setAlerta("Evento agregado correctamente");
    }

    setForm({ nombre: '', lugar: '', fecha: '' });
  };

  return (
    <div className="container">
      <h2>Agregar Evento</h2>

      {alerta && (
        <div className="alert alert-info">{alerta}</div>
      )}

      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          value={form.nombre}
          onChange={handleOnChangeInputs}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={form.lugar}
          onChange={handleOnChangeInputs}
          className="form-control mb-2"
        />
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleOnChangeInputs}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-success">
          {editIndex !== null ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
}

export default AgregarEvento;
