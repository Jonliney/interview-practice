import { useState } from "react";

type Step = 1 | 2 | 3;

type CheckoutForm = {
  name: string;
  email: string;
  address: string;
  shippingSpeed: "standard" | "express";
  itemCount: string;
  itemPrice: string;
};

const initialForm: CheckoutForm = {
  name: "",
  email: "",
  address: "",
  shippingSpeed: "standard",
  itemCount: "1",
  itemPrice: "20",
};

export default function App() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState(initialForm);

  const total = form.itemCount + form.itemPrice;

  return (
    <main>
      <h1>Checkout</h1>
      <p>Step {step} of 3</p>

      {step === 1 ? (
        <section>
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Name"
          />
          <input
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="Email"
          />
        </section>
      ) : null}

      {step === 2 ? (
        <section>
          <input
            value={form.address}
            onChange={(event) => setForm({ ...form, address: event.target.value })}
            placeholder="Address"
          />

          <select
            value={form.shippingSpeed}
            onChange={(event) =>
              setForm({ ...form, shippingSpeed: event.target.value as CheckoutForm["shippingSpeed"] })
            }
          >
            <option value="standard">Standard</option>
            <option value="express">Express</option>
          </select>
        </section>
      ) : null}

      {step === 3 ? (
        <section>
          <input
            value={form.itemCount}
            onChange={(event) => setForm({ ...form, itemCount: event.target.value })}
            placeholder="Item count"
          />
          <input
            value={form.itemPrice}
            onChange={(event) => setForm({ ...form, itemPrice: event.target.value })}
            placeholder="Item price"
          />
          <p>Total: {total}</p>
        </section>
      ) : null}

      <div>
        <button onClick={() => setStep(Math.max(1, step - 1) as Step)}>Back</button>
        <button onClick={() => setStep(Math.min(3, step + 1) as Step)}>Next</button>
      </div>
    </main>
  );
}
