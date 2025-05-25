import React from "react";
import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sobre from "./SobreNosotros";

function App() {
  const mostrarError = true;

  return (

    <Router>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Eventify</Link>
            <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="/agregar">Agregar</a></li>
            <li className="nav-item"><a className="nav-link active" href="/sobre">Sobre</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/agregar" element={<AgregarEvento />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>

      </div>
    </Router >
  );
}

export default App;