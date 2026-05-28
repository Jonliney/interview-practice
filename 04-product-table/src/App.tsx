import { useState } from "react";
import { products } from "./data";

type SortKey = "name" | "price" | "stock";

export default function App() {
  const [sortKey, setSortKey] = useState<SortKey>("name");

  const sortedProducts = products.sort((a, b) => {
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    }

    return a[sortKey] - b[sortKey];
  });

  return (
    <main>
      <h1>Products</h1>

      <label>
        Sort by{" "}
        <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </label>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.sku}>
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
