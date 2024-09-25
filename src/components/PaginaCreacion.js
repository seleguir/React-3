// Página que muestra un formulario para crear una nueva tarea
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir después de crear la tarea

function PaginaCreacion({ agregarTarea }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [completa, setCompleta] = useState(false); // Define el estado 'completa' y su setter
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: Date.now(), // Generar un ID único basado en la fecha actual
      titulo,
      descripcion,
      completa,
      fechaCreacion: new Date().toLocaleDateString(), // Generar la fecha de creación
    };

    agregarTarea(nuevaTarea); // Agregar la tarea a la lista
    setTitulo(''); // Limpiar el formulario
    setDescripcion('');
    setCompleta(false);
    navigate('/'); // Redirigir a la página de inicio después de crear la tarea
  };

  return (
    <form onSubmit={manejarEnvio}><br></br>
      <h1>Crear nueva tarea</h1><br></br>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/><br></br>
        <br></br>
      <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/><br></br>
        <br></br>
      <label>
        <input type="checkbox" checked={completa} onChange={(e) => setCompleta(e.target.checked)}/>
        Completa
      </label><br></br>
        <br></br>
      <button type="submit">Crear tarea</button>
    </form>
  );
}

export default PaginaCreacion;

