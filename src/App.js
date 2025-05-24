import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import AgregarEvento from './AgregarEvento';
import SobreNosotros from './SobreNosotros';
import Error404 from './Error';

export default function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Eventify</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agregar">Agregar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/agregar" element={<AgregarEvento />} />
          <Route path="/sobre" element={<SobreNosotros />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}
