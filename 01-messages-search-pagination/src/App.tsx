import { useEffect, useState } from "react";
import { getMessages, type Message } from "./api";

const PAGE_SIZE = 5;

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMessages().then((nextMessages) => {
      setMessages(nextMessages);
      setLoading(false);
    });
  }, []);

  const visibleMessages = messages.slice(0, visibleCount);

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
        {visibleMessages.map((message) => (
          <li key={message.id}>
            <strong>{message.name}</strong>
            <div>{message.participants.join(", ")}</div>
          </li>
        ))}
      </ul>

      <button onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}>Load more</button>
    </main>
  );
}
