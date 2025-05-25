import React from "react";
import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";

import { Routes, Route } from "react-router";
import Sobre from "./SobreNosotros";

function App() {
  const mostrarError = true;

  return (
    <div>
      <nav className="navbar navbar-light bg-light"> 
        <a className="navbar-brand" href="/">Eventify</a> 
        <ul>
          <li><a href="/agregar">Agregar</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agregar" element={<AgregarEvento />} />
        <Route path="/sobre" element={<Sobre />} /> 
      </Routes>
    </div>
  );
}

export default App;