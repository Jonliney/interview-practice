import { useState } from "react";
import { products } from "./data";

type SortKey = "name" | "price" | "stock";

export default function App() {
  const [sortKey, setSortKey] = useState<SortKey>("name");

  return (
    <main>
      <h1>Products</h1>

      <div>
        <label>
          Sort by{" "}
          <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </label>

        <button type="button">Select visible</button>
        <p>Selected rows: 0</p>
        <p>Selected total: $0</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.sku}>
              <td>
                <input type="checkbox" checked={false} readOnly />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
