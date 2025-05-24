import React from "react";
import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sobre from "./SobreNosotros";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">Eventify</Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/agregar" className="nav-link">Agregar</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agregar" element={<AgregarEvento />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
