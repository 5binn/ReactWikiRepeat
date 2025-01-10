import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TasksProvider from "./TasksProvider";

export default function App() {
  return (
    <TasksProvider>
      <h1>Day off in Tokyo</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
