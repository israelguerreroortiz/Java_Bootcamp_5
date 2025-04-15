/*
    Lista {
        Tarea 1 /Eliminar tarea
        Tarea 2 /Eliminar tarea

    }
    input:text   Agregar Tarea
*/

import { useState } from "react";

function ListaDeTareas() {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  const añadirTarea = () => {
    if (inputValue.trim() === "") return;
    setTareas([...tareas, inputValue]);
    setInputValue("");
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <>
      <label htmlFor="tarea">Nombre de la tarea</label>
      <input
        type="text"
        name="tarea"
        id="tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" onClick={añadirTarea}>
        Añadir tarea
      </button>

      <ul className="lista-tareas">
        {tareas.map((tarea, index) => (
          <>
            <li key={index}>{tarea}</li>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListaDeTareas;
