import { useState, type ReactNode } from "react";
import { createReply, type Comment } from "./api";

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
  const [comments, setComments] = useState(initialComments);
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  async function handleReply(parentId: string) {
    const message = drafts[parentId]?.trim();

    if (!message) {
      return;
    }

    const nextReply = await createReply(parentId, message);
    setComments(addReply(comments, parentId, nextReply));
    setDrafts({ ...drafts, [parentId]: "" });
  }

  function addReply(nodes: Comment[], parentId: string, reply: Comment): Comment[] {
    return nodes.map((node) => {
      if (node.id === parentId) {
        return { ...node, children: [...node.children, reply] };
      }

      return { ...node, children: addReply(node.children, parentId, reply) };
    });
  }

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
            <button onClick={() => void handleReply(comment.id)}>Reply</button>

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
