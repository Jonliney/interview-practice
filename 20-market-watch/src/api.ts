export type Quote = {
  symbol: string;
  price: number;
  change: number;
};

export async function getQuote(symbol: string): Promise<Quote> {
  const delayMap: Record<string, number> = {
    AAPL: 550,
    TSLA: 150,
    MSFT: 300,
  };

  await new Promise((resolve) => setTimeout(resolve, delayMap[symbol] ?? 250));

  if (symbol === "TSLA") {
    throw new Error("Quote temporarily unavailable");
  }

  const base = symbol.charCodeAt(0);

  return {
    symbol,
    price: 100 + base,
    change: Number((((base % 10) - 5) / 10).toFixed(2)),
  };
}
