import { useState } from "react";
import { getFeedPage, type FeedItem } from "./api";

const PAGE_SIZE = 3;

export default function App() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<FeedItem[]>([]);

  async function loadMore() {
    const nextPage = page + 1;
    const nextItems = await getFeedPage(nextPage, PAGE_SIZE);
    setItems([...items, ...nextItems]);
    setPage(nextPage);
  }

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

      <button onClick={() => void loadMore()}>Load more</button>
    </main>
  );
}
