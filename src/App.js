// Manejo de rutas (enrutamiento)

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';// Configuración de las rutas
import { useState } from 'react';
import PaginaInicio from './components/PaginaInicio';
import PaginaDetalle from './components/PaginaDetalle';
import PaginaCreacion from './components/PaginaCreacion';
import { tareasIniciales } from './data/tareas';

function App() {
  const [tareas, setTareas] = useState(tareasIniciales); // Estado para almacenar la lista de tareas

  // Función para agregar una nueva tarea
  const agregarTarea = (nuevaTarea) => {
    setTareas(prevTareas => [...prevTareas, nuevaTarea]); // Usamos el estado previo de tareas
  };

  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <br></br>
        <Link to="/crear">Crear Tarea</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PaginaInicio tareas={tareas} />} /> {/* Pasa las tareas actualizadas a la página de inicio */}
        <Route path="/detalle/:id" element={<PaginaDetalle tareas={tareas} />} /> 
        <Route path="/crear" element={<PaginaCreacion agregarTarea={agregarTarea} />} /> {/* Pasa la función agregarTarea como prop a la página de creación*/}
      </Routes>
    </Router>
  );
}

export default App;