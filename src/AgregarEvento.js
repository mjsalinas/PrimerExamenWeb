// import React from "react";
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
    setEvento(prev => ({ ...prev, [name]: value }));
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Evento agregado", evento);
    setMensaje(`el evento "${evento.nombre}" con lugar "${evento.lugar}" a sido agregao para la fecha "${evento.fecha}"`);
  };


  return (
    <div className="container" style={{ maxWidth: "800px", marginTop: "50px" }}>
      <h2>Agregar Evento</h2>
      <form className="mb-4"  onSubmit={enviarFormulario} style={{ padding: "20px", borderRadius: "10px" }}>
        <input 
        type="text" 
        name="nombre" 
        placeholder="Nombre del evento" 
        value={evento.nombre}
        onChange={handleOnChange} />
        
        <input 
        type="text" 
        name="lugar" 
        placeholder="Lugar" 
        value={evento.lugar}
        onChange={handleOnChange}/>

        <input 
        type="date" 
        name="fecha" 
        placeholder="Fecha"
        value={evento.fecha} 
        onChange={handleOnChange}/>
        <button 
        type="Submit" 
        className="btn btn-success">Agregar</button>
      </form>
      {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
    </div>
  );
}

export default AgregarEvento;