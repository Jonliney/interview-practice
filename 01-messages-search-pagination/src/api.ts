export type Message = {
  id: string;
  name: string;
  participants: string[];
};

const messages: Message[] = [
  { id: "m1", name: "Design review", participants: ["Ada", "Grace", "Linus"] },
  { id: "m2", name: "Release train", participants: ["Taylor", "Sam"] },
  { id: "m3", name: "Team lunch", participants: ["Jordan", "Lee", "Morgan"] },
  { id: "m4", name: "Incident follow-up", participants: ["Alex", "Priya"] },
  { id: "m5", name: "Budget planning", participants: ["Chris", "Devon"] },
  { id: "m6", name: "Roadmap ideas", participants: ["Mina", "Ivy", "Omar"] },
  { id: "m7", name: "Pairing session", participants: ["Noah", "Ava"] },
  { id: "m8", name: "Hiring sync", participants: ["Luca", "Emma", "Riley"] },
  { id: "m9", name: "On-call handoff", participants: ["Kai", "Nina"] },
  { id: "m10", name: "Coffee chat", participants: ["Eli", "Sofia"] },
  { id: "m11", name: "API planning", participants: ["Quinn", "Maya"] },
  { id: "m12", name: "Accessibility audit", participants: ["Zoe", "Harper"] },
];

export async function getMessages(): Promise<Message[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return messages;
}
