export type Product = {
  sku: string;
  name: string;
  price: number;
  stock: number;
};

export const products: Product[] = [
  { sku: "p1", name: "Keyboard", price: 89, stock: 12 },
  { sku: "p2", name: "Monitor", price: 249, stock: 6 },
  { sku: "p3", name: "Mouse", price: 45, stock: 19 },
  { sku: "p4", name: "Headphones", price: 120, stock: 8 },
  { sku: "p5", name: "Dock", price: 160, stock: 4 },
];
