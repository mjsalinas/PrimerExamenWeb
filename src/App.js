import React from "react";
import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./SobreNosotros";

function App() {
  return (
    <Router>
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;