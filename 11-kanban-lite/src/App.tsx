import { useState } from "react";

type ColumnId = "todo" | "doing" | "done";

type Task = {
  id: string;
  title: string;
  priority: 1 | 2 | 3;
};

type Board = Record<ColumnId, Task[]>;

const initialBoard: Board = {
  todo: [
    { id: "k1", title: "Write release notes", priority: 2 },
    { id: "k2", title: "Fix flaky test", priority: 1 },
  ],
  doing: [{ id: "k3", title: "Prepare demo", priority: 3 }],
  done: [{ id: "k4", title: "Deploy hotfix", priority: 2 }],
};

export default function App() {
  const [board] = useState<Board>(initialBoard);

  return (
    <main>
      <h1>Kanban Lite</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {(Object.keys(board) as ColumnId[]).map((columnId) => (
          <section key={columnId}>
            <h2>{columnId}</h2>

            <ul>
              {board[columnId].map((task) => (
                <li key={task.id}>
                  {task.title} (P{task.priority})
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
