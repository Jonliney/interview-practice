import { useEffect, useState } from "react";
import { getEmployees, type Employee } from "./api";

export default function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [team, setTeam] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "startDate">("name");
  const [query, setQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    getEmployees().then((items) => {
      setEmployees(items);
      setSelectedEmployee(items[0] ?? null);
    });
  }, []);

  return (
    <main>
      <h1>Employee Directory</h1>

      <div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name"
        />

        <select value={team} onChange={(event) => setTeam(event.target.value)}>
          <option>All</option>
          <option>Design</option>
          <option>Engineering</option>
          <option>Product</option>
        </select>

        <select value={sortBy} onChange={(event) => setSortBy(event.target.value as "name" | "startDate")}>
          <option value="name">Name</option>
          <option value="startDate">Start date</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              <button onClick={() => setSelectedEmployee(employee)}>
                {employee.name} - {employee.team}
              </button>
            </li>
          ))}
        </ul>

        <section>
          {selectedEmployee ? (
            <>
              <h2>{selectedEmployee.name}</h2>
              <p>{selectedEmployee.title}</p>
              <p>{selectedEmployee.team}</p>
              <p>Started: {selectedEmployee.startDate}</p>
            </>
          ) : (
            <p>Select an employee.</p>
          )}
        </section>
      </div>
    </main>
  );
}
