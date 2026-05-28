export type Notification = {
  id: string;
  message: string;
  createdAt: string;
};

let callCount = 0;

export async function getNotifications(): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  callCount += 1;

  const base: Notification[] = [
    { id: "n1", message: "Build finished", createdAt: "2026-05-28T08:00:00Z" },
    { id: "n2", message: "New comment on PR", createdAt: "2026-05-28T08:03:00Z" },
  ];

  if (callCount > 1) {
    base.unshift({
      id: `n${callCount + 1}`,
      message: `Background sync #${callCount}`,
      createdAt: `2026-05-28T08:0${callCount}:00Z`,
    });
  }

  return base;
}
