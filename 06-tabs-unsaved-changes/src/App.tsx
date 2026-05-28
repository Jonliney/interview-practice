import { useState } from "react";

type Document = {
  id: string;
  title: string;
  body: string;
};

const initialDocuments: Document[] = [
  { id: "d1", title: "Welcome email", body: "Hello team,\n\nThanks for joining..." },
  { id: "d2", title: "Release notes", body: "This week we shipped..." },
  { id: "d3", title: "Interview feedback", body: "Candidate showed strong..." },
];

export default function App() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [activeId, setActiveId] = useState("d1");
  const [draftBody, setDraftBody] = useState(initialDocuments[0].body);

  const activeDocument = documents.find((document) => document.id === activeId) ?? documents[0];

  function handleTabClick(nextId: string) {
    setActiveId(nextId);
    const nextDocument = documents.find((document) => document.id === nextId);
    setDraftBody(nextDocument?.body ?? "");
  }

  function handleSave() {
    setDocuments(
      documents.map((document) =>
        document.id === activeId ? { ...document, body: draftBody } : document,
      ),
    );
  }

  return (
    <main>
      <h1>Drafts</h1>

      <div role="tablist" aria-label="Documents">
        {documents.map((document) => (
          <button key={document.id} onClick={() => handleTabClick(document.id)}>
            {document.title}
          </button>
        ))}
      </div>

      <section>
        <h2>{activeDocument.title}</h2>
        <textarea
          rows={10}
          value={draftBody}
          onChange={(event) => setDraftBody(event.target.value)}
        />
      </section>

      <button onClick={handleSave}>Save</button>
    </main>
  );
}
