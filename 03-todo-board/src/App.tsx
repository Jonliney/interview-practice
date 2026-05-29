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
  const [draftTitle, setDraftTitle] = useState("");

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
        <input
          value={draftTitle}
          onChange={(event) => setDraftTitle(event.target.value)}
          placeholder="Add a new todo"
        />
        <button type="button">Add todo</button>
      </div>

      <div>
        <button type="button">All</button>
        <button type="button">Todo</button>
        <button type="button">Doing</button>
        <button type="button">Done</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.status}
            <div>
              <button type="button">Edit title</button>
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
