import { createContext, useReducer } from "react";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<
  React.Dispatch<Action> | undefined
>(undefined);

const initialTasks: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default function TasksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

export function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      const _exhaustiveCheck: never = action;
      throw Error("Unknown action: " + _exhaustiveCheck);
    }
  }
}
