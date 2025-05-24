import React, { useState } from "react";
import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sobre from "./SobreNosotros";

function App() {
  const [eventos, setEventos] = useState([
    { nombre: "ReactConf", lugar: "Online", fecha: "2025-06-10" },
    { nombre: "ReactConf 2", lugar: "Online", fecha: "2025-06-11" }
  ]);

  const agregarEvento = (nuevoEvento) => {
    setEventos([...eventos, nuevoEvento]);
  };

  return (
    <Router>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">Eventify</Link>
        <ul>
          <li><Link to="/agregar">Agregar</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio eventos={eventos} />} />
        <Route path="/agregar" element={<AgregarEvento agregarEvento={agregarEvento} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;