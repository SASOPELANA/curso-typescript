import { useState } from "react";
import { ListaTarea } from "./ListaTarea";

export const TodoApp = () => {
  const [newTask, setTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  const handleAddTask = () => {
     if (newTask.trim() === '') return;
      
     setListTask(tareaAnteriores => [...tareaAnteriores, newTask])
     setTask('');

  };

  const handleDeleteTask = (index: number) => {
    
    setListTask(tareas => tareas.filter((_,i) => i !== index)) 


  };

  return (
    <>
      <h1>Lista de Tareas</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nueva Tarea"
        />

        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      <ListaTarea listTask={listTask} deleteTask={handleDeleteTask} />
    </>
  );
};
