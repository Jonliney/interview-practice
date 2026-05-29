import { useState } from "react";

export default function App() {
  const [period, setPeriod] = useState("7d");
  const [team, setTeam] = useState("all");

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

        <button type="button">Retry</button>
      </div>
      <section>
        <p>Select filters and load the dashboard data.</p>
      </section>
    </main>
  );
}
