export type Comment = {
  id: string;
  author: string;
  message: string;
  children: Comment[];
};

export async function createReply(parentId: string, message: string): Promise<Comment> {
  await new Promise((resolve) => setTimeout(resolve, 350));

  if (message.toLowerCase().includes("error")) {
    throw new Error("Reply failed");
  }

  return {
    id: `${parentId}-${Date.now()}`,
    author: "You",
    message,
    children: [],
  };
}
