import { useEffect, useRef, useState } from "react";

export default function stopWatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [passedTime, setPassedTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<number | undefined>(undefined);

  function start() {
    if (!isRunning) {
      setStartTime(Date.now() - passedTime);
      setIsRunning(true);
    }
  }

  function stop() {
    if (isRunning) {
      clearInterval(intervalRef.current!);
      setIsRunning(false);
      setPassedTime(Date.now() - (startTime ?? Date.now()));
    }
  }

  function reset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setPassedTime(0);
    setStartTime(null);
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setPassedTime(Date.now() - (startTime ?? Date.now()));
      }, 5);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, startTime]);

  return (
    <>
      <h1>TIME : {(passedTime / 1000).toFixed(3)}</h1>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}
