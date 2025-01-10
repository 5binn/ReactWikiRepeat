import { useState, useEffect } from "react";
import { createConnection } from "./Chat";

const serverUrl = "https://localhost:1234";

interface ChatRoomProps {
  roomId: string;
}

function ChatRoom({ roomId }: ChatRoomProps) {
  let url: string = serverUrl;
  useEffect(() => {
    const connection = createConnection(roomId, url);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState<string>("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
