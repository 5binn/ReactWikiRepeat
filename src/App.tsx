import { useEffect, useState } from "react";
import { createConnection } from "./Chat";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }: any) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disConnect();
  }, [roomId]);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState<number>(1);
  const [show, setShow] = useState(false);

  function handleChangeRoom(e: React.ChangeEvent<HTMLSelectElement>) {
    setRoomId(Number(e.target.value));
  }

  return (
    <>
      <label>
        Choose the room:{" "}
        <select value={roomId} onChange={handleChangeRoom}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>{show ? "CLOSE" : "OPEN"}</button>
      {show && <br />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
