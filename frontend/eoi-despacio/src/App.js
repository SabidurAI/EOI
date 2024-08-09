import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Portada from './components/Portada';
import CartaPresentacion from './components/CartaPresentacion';
import DescripcionCompania from './components/DescripcionCompania';
import ExperienciaRelevante from './components/ExperienciaRelevante';
import Expertas from './components/Expertas';
import ProyectosSimilares from './components/ProyectosSimilares';
import EntendimientoProyecto from './components/EntendimientoProyecto';
import Preview from './components/Preview';
import GenerarDocumento from './components/GenerarDocumento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portada" element={<Portada />} />
        <Route path="/carta-presentacion" element={<CartaPresentacion />} />
        <Route path="/descripcion-compania" element={<DescripcionCompania />} />
        <Route path="/experiencia-relevante" element={<ExperienciaRelevante />} />
        <Route path="/expertas" element={<Expertas />} />
        <Route path="/proyectos-similares" element={<ProyectosSimilares />} />
        <Route path="/entendimiento-proyecto" element={<EntendimientoProyecto />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/generar-documento" element={<GenerarDocumento />} />
      </Routes>
    </Router>
  );
}

export default App;
