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
  const [board, setBoard] = useState<Board>(initialBoard);

  function moveTask(taskId: string, from: ColumnId, to: ColumnId) {
    const task = board[from].find((item) => item.id === taskId);
    if (!task) {
      return;
    }

    board[from] = board[from].filter((item) => item.id !== taskId);
    board[to].push(task);
    setBoard({ ...board });
  }

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
                  <div>
                    {columnId !== "todo" ? (
                      <button onClick={() => moveTask(task.id, columnId, "todo")}>To todo</button>
                    ) : null}
                    {columnId !== "doing" ? (
                      <button onClick={() => moveTask(task.id, columnId, "doing")}>To doing</button>
                    ) : null}
                    {columnId !== "done" ? (
                      <button onClick={() => moveTask(task.id, columnId, "done")}>To done</button>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
