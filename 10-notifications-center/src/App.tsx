import { useEffect, useState } from "react";
import { getNotifications, type Notification } from "./api";

type NotificationWithRead = Notification & {
  read: boolean;
};

export default function App() {
  const [items, setItems] = useState<NotificationWithRead[]>([]);

  useEffect(() => {
    async function load() {
      const nextItems = await getNotifications();
      setItems(nextItems.map((item) => ({ ...item, read: false })));
    }

    void load();
    setInterval(load, 3000);
  }, []);

  return (
    <main>
      <h1>Notifications</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.read ? "Read" : "Unread"}</span> - {item.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
