export type Preferences = {
  email: string;
  theme: "light" | "dark" | "system";
  marketingEmails: boolean;
};

export async function savePreferences(input: Preferences): Promise<Preferences> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (!input.email.includes("@")) {
    throw new Error("Email is invalid");
  }

  return input;
}
