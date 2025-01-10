import { useEffect, useState } from "react";
import { Point } from "./App";

export function useDelayedValue(value: Point, delay: number) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);
  return delayedValue;
}
