import { useEffect, useState } from "react";
import { createConnection } from "./Chat";

function ChatRoom({ roomId }: any) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disConnect();
  }, [serverUrl, roomId]);
  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState<string>("general");

  function handleChangeRoom(e: React.ChangeEvent<HTMLSelectElement>) {
    setRoomId(String(e.target.value));
  }

  return (
    <>
      <label>
        Choose the room:{" "}
        <select value={roomId} onChange={handleChangeRoom}>
          <option value="general">general</option>
          <option value="music">music</option>
          <option value="game">game</option>
        </select>
      </label>
      <br />
      <ChatRoom roomId={roomId} />
    </>
  );
}
