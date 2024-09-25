// Página que muestra la información completa de una tarea
import React from 'react';
import { useParams } from 'react-router-dom';

function PaginaDetalle({ tareas }) {
  const { id } = useParams(); // Obtiene el ID de la URL
  const tarea = tareas.find(t => t.id === parseInt(id)); // Encuentra la tarea por ID

  // Si no se encuentra una tarea con el ID proporcionado, tarea es undefined 
  if (!tarea) { 
    return <p>Tarea no encontrada</p>; // Muestra un mensaje indicando que la tarea no fue encontrada
  }

  return (
    <div>
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <p>Fecha de Creación: {tarea.fechaCreacion}</p>
      <p>Estado: {tarea.completa ? "Completa" : "Incompleta"}</p>
    </div>
  );
}

export default PaginaDetalle;

