import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import AgregarEvento from "./AgregarEvento";
import Error404 from "./Error";
import Sobre from "./SobreNosotros";

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/Error" element={<Error404 />} />
        </Routes>

        {/* No necesitas renderizar <Error404 /> aquí si usas rutas */}
      </div>
    </BrowserRouter>
  );
}

export default App