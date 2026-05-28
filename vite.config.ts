import { readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function getTaskHtmlInputs() {
  const rootDir = resolve(__dirname);
  const entries = readdirSync(rootDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .reduce<Record<string, string>>((accumulator, entry) => {
      const htmlPath = join(rootDir, entry.name, "index.html");

      if (statSync(htmlPath).isFile()) {
        accumulator[entry.name] = htmlPath;
      }

      return accumulator;
    }, {});
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        ...getTaskHtmlInputs(),
      },
    },
  },
});
