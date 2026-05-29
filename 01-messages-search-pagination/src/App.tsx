import { useEffect, useState } from "react";
import { getMessages, type Message } from "./api";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getMessages().then((nextMessages) => {
      setMessages(nextMessages);
    });
  }, []);

  return (
    <main>
      <h1>Messages</h1>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search messages"
      />

      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.name}</strong>
            <div>{message.participants.join(", ")}</div>
          </li>
        ))}
      </ul>

      <button type="button">Load more</button>
    </main>
  );
}
