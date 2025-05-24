import React, { useState } from "react";

function AgregarEvento() {
  const [mensaje, setMensaje] = useState("");
  const [evento, setEvento] = useState({
    nombre: "",
    lugar: "",
    fecha: ""
  });

  const campos = [
    { name: "nombre", type: "text", placeholder: "Nombre del evento" },
    { name: "lugar", type: "text", placeholder: "Lugar" },
    { name: "fecha", type: "date", placeholder: "Fecha" }
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEvento(prev => ({ ...prev, [name]: value }));
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (evento.nombre && evento.lugar && evento.fecha) {
      setMensaje("¡Evento agregado correctamente!");
      setEvento({ nombre: "", lugar: "", fecha: "" });
    } else {
      setMensaje("Por favor, llene todos los campos.");
    }
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center" style={{background: "#e3f2fd"}}>
      <div className="card shadow" style={{width: "340px", background: "#f0f8ff"}}>
        <div className="card-body">
          <h2 className="text-center mb-4">Agregar Evento</h2>
          <form onSubmit={enviarFormulario}>
            {campos.map((campo) => (
              <div className="mb-3" key={campo.name}>
                <input
                  type={campo.type}
                  name={campo.name}
                  placeholder={campo.placeholder}
                  className="form-control"
                  value={evento[campo.name]}
                  onChange={handleOnChange}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-success w-100">Agregar</button>
          </form>
          {mensaje && (
            <div className={`alert mt-3 ${mensaje.includes("correctamente") ? "alert-success" : "alert-danger"}`}>
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgregarEvento;