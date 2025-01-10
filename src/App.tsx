import { useRef, useState } from "react";

export default function stopWatch() {
  const [time, setTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);

  function handleStart() {
    setTime(Date.now());
    setNow(Date.now());

    handleStop();
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPass = 0;
  if (time != null && now != null) {
    secondsPass = (now - time) / 1000;
  }
  return (
    <>
      <h1>TIME : {secondsPass.toFixed(3)}</h1>
      <button onClick={handleStart}>START</button>
      <button onClick={handleStop}>STOP</button>
    </>
  );
}
