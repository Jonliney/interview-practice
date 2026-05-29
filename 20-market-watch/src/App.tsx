import { useState } from "react";

const symbols = ["AAPL", "MSFT", "TSLA"] as const;

export default function App() {
  const [symbol, setSymbol] = useState<(typeof symbols)[number]>("AAPL");

  return (
    <main>
      <h1>Market Watch</h1>

      <div>
        {symbols.map((item) => (
          <button key={item} onClick={() => setSymbol(item)}>
            {item}
          </button>
        ))}
        <button type="button">Retry</button>
      </div>

      <section>
        <h2>{symbol}</h2>
        <p>Select a symbol and load the latest quote.</p>
      </section>
    </main>
  );
}
