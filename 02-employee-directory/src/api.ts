export type Employee = {
  id: string;
  name: string;
  team: "Design" | "Engineering" | "Product";
  title: string;
  startDate: string;
};

const employees: Employee[] = [
  { id: "e1", name: "Ava Stone", team: "Engineering", title: "Frontend Engineer", startDate: "2022-11-03" },
  { id: "e2", name: "Leo Grant", team: "Product", title: "Product Manager", startDate: "2021-06-14" },
  { id: "e3", name: "Mia Chen", team: "Design", title: "Product Designer", startDate: "2023-02-20" },
  { id: "e4", name: "Noah Patel", team: "Engineering", title: "Platform Engineer", startDate: "2020-09-01" },
  { id: "e5", name: "Ella Brooks", team: "Design", title: "Content Designer", startDate: "2024-01-08" },
  { id: "e6", name: "Ivy Walker", team: "Product", title: "Analyst", startDate: "2022-03-17" },
];

export async function getEmployees() {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return employees;
}
