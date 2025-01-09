import { useState } from "react";
import type { Task } from "./App";

interface TaskListProps {
  tasks: Task[];
  editTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

export default function TaskList({
  tasks,
  editTask,
  deleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              editTask({ ...task, done: e.target.checked });
            }}
          />
          <Task task={task} onEdit={editTask} />
          <button onClick={() => deleteTask(task.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}

interface TaskProps {
  task: Task;
  onEdit: (task: Task) => void;
}

function Task({ task, onEdit }: TaskProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  if (isEdit) {
    return (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onEdit({ ...task, text: e.target.value });
          }}
        ></input>
        <button onClick={() => setIsEdit(false)}>SAVE</button>
      </>
    );
  } else {
    return (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEdit(true)}>EDIT</button>
      </>
    );
  }
}
