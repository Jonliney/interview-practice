import { useEffect, useState } from "react";
import { searchCities } from "./api";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    searchCities(query)
      .then((items) => {
        setResults(items);
        setLoading(false);
      })
      .catch((nextError: Error) => {
        setError(nextError.message);
        setLoading(false);
      });
  }, [query]);

  return (
    <main>
      <h1>City Search</h1>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Start typing a city"
      />

      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}

      <ul>
        {results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </main>
  );
}
