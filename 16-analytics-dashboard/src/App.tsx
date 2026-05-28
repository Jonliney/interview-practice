import { useEffect, useState } from "react";
import { getDashboardData, type DashboardData } from "./api";

export default function App() {
  const [period, setPeriod] = useState("7d");
  const [team, setTeam] = useState("all");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getDashboardData(period, team)
      .then((nextData) => {
        setData(nextData);
        setLoading(false);
      })
      .catch((nextError: Error) => {
        setError(nextError.message);
        setLoading(false);
      });
  }, [period, team]);

  return (
    <main>
      <h1>Analytics Dashboard</h1>

      <div>
        <select value={period} onChange={(event) => setPeriod(event.target.value)}>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>

        <select value={team} onChange={(event) => setTeam(event.target.value)}>
          <option value="all">All teams</option>
          <option value="engineering">Engineering</option>
          <option value="design">Design</option>
          <option value="product">Product</option>
        </select>
      </div>

      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}

      {data ? (
        <section>
          <p>Signups: {data.signups}</p>
          <p>Revenue: ${data.revenue}</p>
          <p>Conversion: {data.conversionRate}%</p>
        </section>
      ) : null}
    </main>
  );
}
