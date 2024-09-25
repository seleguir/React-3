// Página que muestra una lista de tareas y un enlace para crear una nueva tarea
import React from 'react';
import { Link } from 'react-router-dom';

function PaginaInicio({ tareas }) {
  return (
    <div className="container mt-4"> 
      <h1 className="text-center mb-4">Lista de Tareas</h1> 
      <ul className="list-group"> 
        {tareas.map(tarea => (
          <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center"> 
            <Link to={`/detalle/${tarea.id}`} className="text-decoration-none">
              {tarea.titulo} - {tarea.descripcion} {/* Descripción*/}
            </Link>
            <span className={`badge ${tarea.completa ? 'bg-success' : 'bg-warning'} rounded-pill`}>
              {tarea.completa ? 'Completa' : 'Incompleta'} {/* Indicador de estado */}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginaInicio;
