import { useState } from "react";

export default function AddTask({
  addTask,
}: {
  addTask: (text: string) => void;
}) {
  const [text, setText] = useState<string>("");

  return (
    <>
      <input
        placeholder="Add your task!"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          addTask(text);
        }}
      >
        ADD
      </button>
    </>
  );
}
