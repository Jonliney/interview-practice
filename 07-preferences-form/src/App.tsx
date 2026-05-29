import { useState, type FormEvent } from "react";
import type { Preferences } from "./api";

const savedPreferences: Preferences = {
  email: "candidate@example.com",
  theme: "system",
  marketingEmails: true,
};

export default function App() {
  const [form, setForm] = useState(savedPreferences);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main>
      <h1>Preferences</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>

        <label>
          Theme
          <select
            value={form.theme}
            onChange={(event) =>
              setForm({ ...form, theme: event.target.value as Preferences["theme"] })
            }
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </label>

        <label>
          Receive marketing emails
          <input
            type="checkbox"
            defaultChecked={form.marketingEmails}
            onChange={(event) => setForm({ ...form, marketingEmails: event.target.checked })}
          />
        </label>

        <div>
          <button type="submit">Save</button>
          <button type="button">Reset</button>
        </div>
      </form>
    </main>
  );
}
