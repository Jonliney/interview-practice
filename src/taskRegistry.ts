import type { ComponentType } from "react";

const modules = import.meta.glob("../*/src/App.tsx");

export async function loadTaskApp(slug: string): Promise<ComponentType | null> {
  const importKey = `../${slug}/src/App.tsx`;
  const importer = modules[importKey] as
    | (() => Promise<{ default: ComponentType }>)
    | undefined;

  if (!importer) {
    return null;
  }

  const module = await importer();
  return module.default;
}
