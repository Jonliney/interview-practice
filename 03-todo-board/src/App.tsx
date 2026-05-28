import { useState } from "react";

type Status = "todo" | "doing" | "done";

type Todo = {
  id: string;
  title: string;
  status: Status;
};

const initialTodos: Todo[] = [
  { id: "t1", title: "Write onboarding doc", status: "todo" },
  { id: "t2", title: "Fix dark mode regression", status: "doing" },
  { id: "t3", title: "Merge release branch", status: "done" },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState<Status | "all">("all");

  function moveTodo(id: string, nextStatus: Status) {
    const todo = todos.find((item) => item.id === id);
    if (!todo) {
      return;
    }

    todo.status = nextStatus;
    setTodos([...todos]);
  }

  return (
    <main>
      <h1>Todo Board</h1>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("todo")}>Todo</button>
        <button onClick={() => setFilter("doing")}>Doing</button>
        <button onClick={() => setFilter("done")}>Done</button>
      </div>

      <ul>
        {todos
          .filter((todo) => filter === "all" || todo.status === filter)
          .map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> - {todo.status}
              <div>
                <button onClick={() => moveTodo(todo.id, "todo")}>Todo</button>
                <button onClick={() => moveTodo(todo.id, "doing")}>Doing</button>
                <button onClick={() => moveTodo(todo.id, "done")}>Done</button>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
