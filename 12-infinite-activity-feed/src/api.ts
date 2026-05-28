export type FeedItem = {
  id: string;
  actor: string;
  action: string;
};

const feed: FeedItem[] = [
  { id: "a1", actor: "Ava", action: "opened PR #401" },
  { id: "a2", actor: "Noah", action: "merged PR #399" },
  { id: "a3", actor: "Ivy", action: "commented on issue #88" },
  { id: "a4", actor: "Mina", action: "deployed to staging" },
  { id: "a5", actor: "Leo", action: "updated docs" },
  { id: "a6", actor: "Ella", action: "closed bug #73" },
  { id: "a7", actor: "Omar", action: "requested review" },
  { id: "a8", actor: "Kai", action: "created incident report" },
];

export async function getFeedPage(page: number, pageSize: number) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (page === 3) {
    throw new Error("Temporary feed error");
  }

  const start = Math.max(0, (page - 1) * pageSize - (page > 1 ? 1 : 0));
  return feed.slice(start, start + pageSize);
}
