import { useReducer } from "react";
import { tasksReducer } from "./TaskReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksContext, TasksDispatchContext } from "./TaskContext";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

let nextId: number = 3;
const initialTasks: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <h1>Day off in Tokyo</h1>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}
