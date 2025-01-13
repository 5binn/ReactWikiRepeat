import { useEffect, useRef, useState } from "react";

function Welcome() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const duration = 1000;
    const node = ref.current;

    let startTime: number | null = performance.now();
    let frameId: number | null = null;

    function onFrame(now: number) {
      if (startTime === null || !node) return;
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);

      node.style.opacity = progress.toString();
      if (progress < 1) {
        frameId = requestAnimationFrame(onFrame);
      }
    }

    function start() {
      if (node) node.style.opacity = "0";
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    }

    function stop() {
      frameId && cancelAnimationFrame(frameId);
      startTime = null;
      frameId = null;
    }

    start();
    return () => stop();
  }, []);
  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "remove" : "show"}</button>
      <br />
      {show && <Welcome />}
    </>
  );
}
