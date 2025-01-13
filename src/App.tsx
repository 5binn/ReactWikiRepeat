import { useEffect, useState } from "react";
import { createConnection, sendMessage } from "./Chat";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }: any) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disConnect();
  }, [roomId]);

  function sendClick() {
    sendMessage(message);
  }
  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendClick}>SEND</button>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState<string>("general");
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="music">music</option>
          <option value="game">game</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>{show ? "CLOSE" : "OPEN"}</button>
      {show && <br />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
