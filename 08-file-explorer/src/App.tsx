import { useState, type ReactNode } from "react";

type FileNode = {
  id: string;
  kind: "file";
  name: string;
};

type FolderNode = {
  id: string;
  kind: "folder";
  name: string;
  expanded?: boolean;
  children: Node[];
};

type Node = FileNode | FolderNode;

const initialTree: FolderNode = {
  id: "root",
  kind: "folder",
  name: "src",
  expanded: true,
  children: [
    {
      id: "f-components",
      kind: "folder",
      name: "components",
      children: [
        { id: "file-button", kind: "file", name: "Button.tsx" },
        { id: "file-modal", kind: "file", name: "Modal.tsx" },
      ],
    },
    {
      id: "f-lib",
      kind: "folder",
      name: "lib",
      children: [{ id: "file-date", kind: "file", name: "date.ts" }],
    },
    { id: "file-app", kind: "file", name: "App.tsx" },
  ],
};

export default function App() {
  const [tree, setTree] = useState<FolderNode>(initialTree);
  const [query, setQuery] = useState("");

  function toggleFolder(id: string, node: Node = tree) {
    if (node.id === id && node.kind === "folder") {
      node.expanded = !node.expanded;
      setTree({ ...tree });
      return;
    }

    if (node.kind === "folder") {
      node.children.forEach((child) => toggleFolder(id, child));
    }
  }

  function renderNode(node: Node, depth = 0): ReactNode {
    const paddingLeft = depth * 16;

    if (node.kind === "file") {
      return (
        <li key={node.id} style={{ paddingLeft }}>
          {node.name}
        </li>
      );
    }

    return (
      <li key={node.id} style={{ paddingLeft }}>
        <button onClick={() => toggleFolder(node.id)}>
          {node.expanded ? "[-]" : "[+]"} {node.name}
        </button>

        {node.expanded ? <ul>{node.children.map((child) => renderNode(child, depth + 1))}</ul> : null}
      </li>
    );
  }

  return (
    <main>
      <h1>File Explorer</h1>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search files"
      />

      <ul>{renderNode(tree)}</ul>
    </main>
  );
}
