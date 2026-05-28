import { useState } from "react";

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
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  return (
    <main>
      <h1>Availability</h1>

      <ul>
        {days.map((day) => (
          <li key={day}>
            <button
              onClick={() => setSelectedDay(day)}
              style={{ fontWeight: selectedDay === day ? "bold" : "normal" }}
            >
              {day} {bookedDays.has(day) ? "(booked)" : ""}
            </button>
          </li>
        ))}
      </ul>

      <p>Selected: {selectedDay ?? "none"}</p>
    </main>
  );
}
