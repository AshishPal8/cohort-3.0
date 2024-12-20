import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState(["Hi there"]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
  });

  return (
    <div className="h-screen bg-black">
      <div className="h-[90vh] bg-red-300">
        {messages.map((message) => {
          <span>{message}</span>;
        })}
      </div>
      <div className="h-[10vh] w-full mt-2">
        <input
          className="text-xl border border-gray-700 bg-gray-800 text-white rounded-md"
          type="text"
        />
        <button className="text-white px-5 py-1 bg-blue-600">Send</button>
      </div>
    </div>
  );
}

export default App;
