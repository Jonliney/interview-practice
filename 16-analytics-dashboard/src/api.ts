export type DashboardData = {
  signups: number;
  revenue: number;
  conversionRate: number;
};

export async function getDashboardData(period: string, team: string): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (period === "90d" && team === "design") {
    throw new Error("Reporting backend timed out");
  }

  const seed = period.length * 10 + team.length;

  return {
    signups: 100 + seed,
    revenue: 1200 + seed * 5,
    conversionRate: Number((2.8 + seed / 100).toFixed(2)),
  };
}
