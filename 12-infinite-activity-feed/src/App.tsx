import { useState } from "react";
import type { FeedItem } from "./api";

export default function App() {
  const [items, setItems] = useState<FeedItem[]>([]);

  return (
    <main>
      <h1>Activity Feed</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.actor}</strong> {item.action}
          </li>
        ))}
      </ul>
      <button onClick={() => setItems(items)}>Load more</button>
    </main>
  );
}
