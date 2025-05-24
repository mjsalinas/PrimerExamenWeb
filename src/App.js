import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AgregarEvento from "./pages/AgregarEvento";
import Sobre from "./pages/SobreNosotros";
import Error404 from "./pages/Error";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link className="navbar-brand" to="/">Eventify</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/agregar">Agregar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agregar" element={<AgregarEvento />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
