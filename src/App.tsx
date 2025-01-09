import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./TaskReducer";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

let nextId: number = 3;
const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAdd(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleEdit(task: Task): void {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDelete(taskId: number): void {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div>
      <h1>TASK MANAGER</h1>
      <AddTask addTask={handleAdd} />
      <TaskList tasks={tasks} editTask={handleEdit} deleteTask={handleDelete} />
    </div>
  );
}
