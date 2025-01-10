import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TasksProvider";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  if (!dispatch) {
    throw new Error("Dispatch function is not available");
  }
  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        ADD
      </button>
    </>
  );
}
