import { useRef, useState } from "react";
import { useFadeIn } from "./useFadeIn";

function Welcome() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  useFadeIn(ref, 1000);

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
