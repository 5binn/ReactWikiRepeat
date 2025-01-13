import { useState } from "react";
import "./welcome.css";

function Welcome() {
  return <h1 className="welcome">Welcome</h1>;
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
