import { useState, type ReactNode } from "react";
import type { Comment } from "./api";

const initialComments: Comment[] = [
  {
    id: "c1",
    author: "Mina",
    message: "We should simplify the loading state here.",
    children: [
      {
        id: "c1-1",
        author: "Omar",
        message: "Agreed. A reducer might help.",
        children: [],
      },
    ],
  },
  {
    id: "c2",
    author: "Ivy",
    message: "Could we cache this response?",
    children: [],
  },
];

export default function App() {
  const [comments] = useState(initialComments);
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  function renderComments(nodes: Comment[]): ReactNode {
    return (
      <ul>
        {nodes.map((comment) => (
          <li key={comment.id}>
            <p>
              <strong>{comment.author}</strong>: {comment.message}
            </p>

            <input
              value={drafts[comment.id] ?? ""}
              onChange={(event) =>
                setDrafts({ ...drafts, [comment.id]: event.target.value })
              }
              placeholder="Write a reply"
            />
            <button type="button">Reply</button>

            {renderComments(comment.children)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main>
      <h1>Comment Thread</h1>
      {renderComments(comments)}
    </main>
  );
}
