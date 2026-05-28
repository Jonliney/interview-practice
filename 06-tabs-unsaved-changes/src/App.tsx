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
  const [documents] = useState(initialDocuments);
  const [draftBody, setDraftBody] = useState(initialDocuments[0].body);

  const activeDocument = documents[0];

  return (
    <main>
      <h1>Drafts</h1>

      <div role="tablist" aria-label="Documents">
        {documents.map((document) => (
          <span key={document.id}>{document.title}</span>
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
    </main>
  );
}
