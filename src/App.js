import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Sobre from "./SobreNosotros";
import Error404 from "./Error";

function App() {
  const [eventos, setEventos] = useState([
    { id: 1, nombre: "ReactConf", lugar: "Online", fecha: "2025-06-10" },
    { id: 2, nombre: "JS Meetup", lugar: "Tegucigalpa", fecha: "2025-07-01" },
  ]);

  const addEvento = (nuevo) => {
    const nextId =
      eventos.length > 0
        ? Math.max(...eventos.map((e) => e.id)) + 1
        : 1;

    setEventos((prev) => [
      ...prev,
      { id: nextId, nombre: nuevo.nombre, lugar: nuevo.lugar, fecha: nuevo.fecha },
    ]);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <a className="navbar-brand" href="/">Eventify</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/agregar">Agregar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/sobre">Sobre</a>
          </li>
        </ul>
      </nav>

      <Router>
        <Routes>
          <Route path="/" element={<Inicio eventos={eventos} />} />

          <Route path="/agregar" element={<AgregarEvento addEvento={addEvento} />} />

          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
