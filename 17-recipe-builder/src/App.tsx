import { useState } from "react";

type Ingredient = {
  id: string;
  quantity: number;
  unit: string;
  name: string;
};

const initialIngredients: Ingredient[] = [
  { id: "i1", quantity: 2, unit: "tbsp", name: "olive oil" },
  { id: "i2", quantity: 1, unit: "tsp", name: "salt" },
];

export default function App() {
  const [servings, setServings] = useState(2);
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [draftLine, setDraftLine] = useState("");

  return (
    <main>
      <h1>Recipe Builder</h1>

      <label>
        Servings
        <input
          type="number"
          value={servings}
          onChange={(event) => setServings(Number(event.target.value))}
        />
      </label>

      <div>
        <input
          value={draftLine}
          onChange={(event) => setDraftLine(event.target.value)}
          placeholder="e.g. 2 tbsp olive oil"
        />
        <button type="button">Add ingredient</button>
      </div>

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.quantity} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
