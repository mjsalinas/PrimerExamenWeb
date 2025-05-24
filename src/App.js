import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";
import Sobre from "./SobreNosotros";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-light bg-light p-3">
          <Link className="navbar-brand" to="/">Eventify</Link>
          <ul className="nav">
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
           <Route path="/inicio" element={<Sobre />} />
          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;