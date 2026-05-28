import { useState } from "react";

type Seat = {
  id: string;
  row: string;
  number: number;
  kind: "standard" | "premium";
  booked: boolean;
};

const seats: Seat[] = [
  { id: "A1", row: "A", number: 1, kind: "premium", booked: false },
  { id: "A2", row: "A", number: 2, kind: "premium", booked: true },
  { id: "A3", row: "A", number: 3, kind: "premium", booked: false },
  { id: "B1", row: "B", number: 1, kind: "standard", booked: false },
  { id: "B2", row: "B", number: 2, kind: "standard", booked: false },
  { id: "B3", row: "B", number: 3, kind: "standard", booked: false },
];

export default function App() {
  const [selectedIds] = useState<string[]>([]);

  return (
    <main>
      <h1>Seat Selector</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)", gap: 8 }}>
        {seats.map((seat) => (
          <button
            key={seat.id}
            disabled={seat.booked}
            style={{
              padding: 12,
              background: selectedIds.includes(seat.id) ? "gold" : "white",
            }}
          >
            {seat.id}
          </button>
        ))}
      </div>

      <p>Selected seats: {selectedIds.join(", ") || "none"}</p>
    </main>
  );
}
