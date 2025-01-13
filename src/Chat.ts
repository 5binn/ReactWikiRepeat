export function createConnection(serverUrl: string, roomId: string) {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disConnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

export function sendMessage(message: string) {
  console.log("🔵 You sent: " + message);
}
