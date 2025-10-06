type TaskProps = {
  task: string;
  deleteTask: () => void;
};

export const Tarea = ({ task, deleteTask }: TaskProps) => {
  return (
    <div className="task">
      <span>{task}</span>

      <button onClick={deleteTask}>Borrar Tarea</button>
    </div>
  );
};
