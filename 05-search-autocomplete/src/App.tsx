import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  return (
    <main>
      <h1>City Search</h1>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Start typing a city"
      />

      <p>Results will appear below.</p>

      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </main>
  );
}
