const days = [
  "2026-06-01",
  "2026-06-02",
  "2026-06-03",
  "2026-06-04",
  "2026-06-05",
  "2026-06-06",
  "2026-06-07",
];

const bookedDays = new Set(["2026-06-03", "2026-06-06"]);

export default function App() {
  return (
    <main>
      <h1>Availability</h1>

      <ul>
        {days.map((day) => (
          <li key={day}>
            <button type="button">
              {day} {bookedDays.has(day) ? "(booked)" : ""}
            </button>
          </li>
        ))}
      </ul>

      <p>Selected range: none</p>
    </main>
  );
}
