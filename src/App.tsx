import { useState, useEffect } from "react";
import { useOnlineStatus } from "./useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveBtn() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveBtn />
      <StatusBar />
    </>
  );
}
