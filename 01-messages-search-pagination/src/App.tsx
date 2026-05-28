import { useEffect, useState } from "react";
import { getMessages, type Message } from "./api";

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMessages().then((nextMessages) => {
      setMessages(nextMessages);
      setLoading(false);
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

      {loading ? <p>Loading...</p> : null}

      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.name}</strong>
            <div>{message.participants.join(", ")}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
