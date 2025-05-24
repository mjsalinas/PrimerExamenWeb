import React from "react";

function AgregarEvento() {
  const [mensaje, setMensaje] = useState("");


   const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEvento(prev => ({ ...prev, [name]: value }));
  };
  
  const enviarFormulario = (e) => {
    console.log("Evento agregado");
  };

  return (
    <div className="container">
      <h2>Agregar Evento</h2>
      <form onClick={enviarFormulario}>
        <input type="text" name="" placeholder="Nombre del evento" />
        <input type="text" name="" placeholder="Lugar" />
        <input type="date" name="" placeholder="Fecha" />
        <button type="button" className="btn btn-success">Agregar</button>
      </form>
    </div>
  );
}

export default AgregarEvento;