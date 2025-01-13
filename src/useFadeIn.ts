import { useEffect } from "react";

export function useFadeIn(ref: React.RefObject<HTMLElement>, duration: number) {
  useEffect(() => {
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
  }, [ref, duration]);
}
