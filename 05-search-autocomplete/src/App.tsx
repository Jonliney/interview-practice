import { useEffect, useState } from "react";
import { searchCities } from "./api";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    searchCities(query)
      .then((items) => {
        setResults(items);
      })
      .catch(() => setResults([]));
  }, [query]);

  return (
    <main>
      <h1>City Search</h1>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Start typing a city"
      />

      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </main>
  );
}
