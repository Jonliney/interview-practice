const allCities = [
  "Amsterdam",
  "Athens",
  "Auckland",
  "Bangkok",
  "Barcelona",
  "Berlin",
  "Boston",
  "Chicago",
  "Lisbon",
  "London",
  "Los Angeles",
  "Melbourne",
  "New York",
  "Oslo",
  "Paris",
  "Seoul",
  "Singapore",
  "Tokyo",
];

export async function searchCities(query: string): Promise<string[]> {
  const delay = 100 + Math.round(Math.random() * 500);
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (query.toLowerCase() === "fail") {
    throw new Error("Search failed");
  }

  return allCities.filter((city) => city.toLowerCase().includes(query.toLowerCase()));
}
