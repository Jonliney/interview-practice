import { createRoot } from "react-dom/client";
import { tasks } from "./taskData";
import "./styles.css";

function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">React + TypeScript</p>
          <h1 className="hero-title">Interview exercises you can branch and run directly.</h1>
          <p className="hero-copy">
            Start the dev server once, then open any numbered task folder path to work from its
            starter app immediately.
          </p>
        </div>
      </section>

      <section className="tasks-grid">
        {tasks.map((task) => (
          <a key={task.slug} className="task-card surface" href={`/${task.slug}/`}>
            <div className="task-meta">
              <span>{task.number}</span>
              <span>{task.difficulty}</span>
            </div>
            <h2>{task.title}</h2>
            <p>{task.themes}</p>
          </a>
        ))}
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<HomePage />);
