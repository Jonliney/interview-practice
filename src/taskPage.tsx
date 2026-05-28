import { createRoot } from "react-dom/client";
import { useEffect, useState, type ComponentType } from "react";
import { getTaskBySlug } from "./taskData";
import { loadTaskApp } from "./taskRegistry";
import "./styles.css";

function getCurrentSlug() {
  const [slug = ""] = window.location.pathname.split("/").filter(Boolean);
  return slug;
}

function TaskPage() {
  const slug = getCurrentSlug();
  const task = getTaskBySlug(slug);
  const [TaskApp, setTaskApp] = useState<ComponentType | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");

  useEffect(() => {
    let cancelled = false;

    if (!task) {
      setStatus("missing");
      setTaskApp(null);
      return;
    }

    setStatus("loading");
    setTaskApp(null);

    void loadTaskApp(task.slug).then((app) => {
      if (cancelled) {
        return;
      }

      if (!app) {
        setStatus("missing");
        return;
      }

      setTaskApp(() => app);
      setStatus("ready");
    });

    return () => {
      cancelled = true;
    };
  }, [task]);

  if (!task || status === "missing") {
    return (
      <div className="page">
        <section className="missing surface">
          <h1>Task not found</h1>
          <p>Open one of the numbered task folders from the pack home page.</p>
          <a className="task-link" href="/">
            Back to task list
          </a>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="task-shell">
        <header className="task-header hero-card">
          <p className="eyebrow">
            Task {task.number} · {task.difficulty}
          </p>
          <h1 className="task-title">{task.title}</h1>
          <p className="task-copy">{task.themes}</p>
          <div className="task-links">
            <a className="task-link" href="/">
              All tasks
            </a>
            <a className="task-link" href={`/${task.slug}/TASK.md`}>
              Prompt
            </a>
          </div>
        </header>

        <section className="task-app surface">
          {status === "loading" || !TaskApp ? (
            <p>Loading task app...</p>
          ) : (
            <div className="app-frame">
              <TaskApp />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<TaskPage />);
