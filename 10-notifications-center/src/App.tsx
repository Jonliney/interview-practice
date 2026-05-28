import { useEffect, useState } from "react";
import { getNotifications, type Notification } from "./api";

type NotificationWithRead = Notification & {
  read: boolean;
};

export default function App() {
  const [items, setItems] = useState<NotificationWithRead[]>([]);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  useEffect(() => {
    async function load() {
      const nextItems = await getNotifications();
      setItems(nextItems.map((item) => ({ ...item, read: false })));
    }

    void load();
    setInterval(load, 3000);
  }, []);

  const visibleItems = items.filter((item) => filter === "all" || !item.read);

  return (
    <main>
      <h1>Notifications</h1>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("unread")}>Unread</button>
      </div>

      <ul>
        {visibleItems.map((item) => (
          <li key={item.id}>
            <span>{item.read ? "Read" : "Unread"}</span> - {item.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
