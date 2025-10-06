import { Tarea } from "./Tarea";

type ListTaskProps = {
  listTask: string[];
  deleteTask: (index: number) => void;
};

export const ListaTarea = ({ listTask, deleteTask }: ListTaskProps) => {
  return (
    <div className="taskList">
      {listTask.map((task, index) => (
        <Tarea key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};
