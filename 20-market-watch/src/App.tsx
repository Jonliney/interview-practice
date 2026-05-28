import { useEffect, useState } from "react";
import { getQuote, type Quote } from "./api";

const symbols = ["AAPL", "MSFT", "TSLA"] as const;

export default function App() {
  const [symbol, setSymbol] = useState<(typeof symbols)[number]>("AAPL");
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getQuote(symbol)
      .then((nextQuote) => {
        setQuote(nextQuote);
        setLoading(false);
      })
      .catch((nextError: Error) => {
        setError(nextError.message);
        setLoading(false);
      });
  }, [symbol]);

  return (
    <main>
      <h1>Market Watch</h1>

      <div>
        {symbols.map((item) => (
          <button key={item} onClick={() => setSymbol(item)}>
            {item}
          </button>
        ))}
      </div>

      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}

      {quote ? (
        <section>
          <h2>{quote.symbol}</h2>
          <p>Price: {quote.price}</p>
          <p>Change: {quote.change}</p>
        </section>
      ) : null}
    </main>
  );
}
