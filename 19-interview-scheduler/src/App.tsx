import { useState } from "react";

type Slot = {
  id: string;
  interviewer: string;
  start: string;
  end: string;
};

type Booking = {
  id: string;
  candidate: string;
  slotId: string;
};

const slots: Slot[] = [
  {
    id: "s1",
    interviewer: "Ava",
    start: "2026-06-10T09:00:00Z",
    end: "2026-06-10T10:00:00Z",
  },
  {
    id: "s2",
    interviewer: "Ava",
    start: "2026-06-10T09:30:00Z",
    end: "2026-06-10T10:30:00Z",
  },
  {
    id: "s3",
    interviewer: "Noah",
    start: "2026-06-10T11:00:00Z",
    end: "2026-06-10T12:00:00Z",
  },
];

const initialBookings: Booking[] = [
  { id: "b1", candidate: "Jordan Reed", slotId: "s3" },
];

export default function App() {
  const [candidate, setCandidate] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState("s1");
  const [bookings] = useState<Booking[]>(initialBookings);

  return (
    <main>
      <h1>Interview Scheduler</h1>

      <div>
        <input
          value={candidate}
          onChange={(event) => setCandidate(event.target.value)}
          placeholder="Candidate name"
        />

        <select value={selectedSlotId} onChange={(event) => setSelectedSlotId(event.target.value)}>
          {slots.map((slot) => (
            <option key={slot.id} value={slot.id}>
              {slot.interviewer}: {slot.start} - {slot.end}
            </option>
          ))}
        </select>

        <button type="button">Book</button>
      </div>

      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.candidate} - {booking.slotId}
            <div>
              <button type="button">Edit</button>
              <button type="button">Cancel</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
