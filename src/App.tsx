import { useRef } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>FOCUS</button>
    </>
  );
}
