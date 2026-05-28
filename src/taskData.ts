export type TaskMeta = {
  slug: string;
  number: string;
  title: string;
  difficulty: string;
  themes: string;
};

export const tasks: TaskMeta[] = [
  {
    slug: "01-messages-search-pagination",
    number: "01",
    title: "Messages Search & Pagination",
    difficulty: "Easy",
    themes: "async data, filtering, pagination",
  },
  {
    slug: "02-employee-directory",
    number: "02",
    title: "Employee Directory",
    difficulty: "Easy",
    themes: "filtering, sorting, selection",
  },
  {
    slug: "03-todo-board",
    number: "03",
    title: "Todo Board",
    difficulty: "Easy",
    themes: "local state, persistence, mutation bugs",
  },
  {
    slug: "04-product-table",
    number: "04",
    title: "Product Table",
    difficulty: "Easy-Medium",
    themes: "sorting, selection, derived state",
  },
  {
    slug: "05-search-autocomplete",
    number: "05",
    title: "Search Autocomplete",
    difficulty: "Medium",
    themes: "debouncing, stale requests, keyboard UX",
  },
  {
    slug: "06-tabs-unsaved-changes",
    number: "06",
    title: "Tabs With Unsaved Changes",
    difficulty: "Medium",
    themes: "controlled forms, guards, keyboard nav",
  },
  {
    slug: "07-preferences-form",
    number: "07",
    title: "Preferences Form",
    difficulty: "Medium",
    themes: "validation, dirty state, async save",
  },
  {
    slug: "08-file-explorer",
    number: "08",
    title: "File Explorer",
    difficulty: "Medium",
    themes: "recursive data, immutable updates, search",
  },
  {
    slug: "09-comment-thread",
    number: "09",
    title: "Comment Thread",
    difficulty: "Medium",
    themes: "nested state, optimistic UI, collapse",
  },
  {
    slug: "10-notifications-center",
    number: "10",
    title: "Notifications Center",
    difficulty: "Medium",
    themes: "polling, cleanup, dedupe, filters",
  },
  {
    slug: "11-kanban-lite",
    number: "11",
    title: "Kanban Lite",
    difficulty: "Medium",
    themes: "reducers, drag-like moves, invariants",
  },
  {
    slug: "12-infinite-activity-feed",
    number: "12",
    title: "Infinite Activity Feed",
    difficulty: "Medium",
    themes: "pagination, infinite loading, dedupe",
  },
  {
    slug: "13-checkout-wizard",
    number: "13",
    title: "Checkout Wizard",
    difficulty: "Medium",
    themes: "multistep flow, validation, totals",
  },
  {
    slug: "14-availability-calendar",
    number: "14",
    title: "Availability Calendar",
    difficulty: "Medium",
    themes: "date selection, range logic, constraints",
  },
  {
    slug: "15-seat-selector",
    number: "15",
    title: "Seat Selector",
    difficulty: "Medium",
    themes: "grid selection, pricing, accessibility",
  },
  {
    slug: "16-analytics-dashboard",
    number: "16",
    title: "Analytics Dashboard",
    difficulty: "Medium-Hard",
    themes: "caching, URL state, async errors",
  },
  {
    slug: "17-recipe-builder",
    number: "17",
    title: "Recipe Builder",
    difficulty: "Medium",
    themes: "parsing, derived values, forms",
  },
  {
    slug: "18-permissions-matrix",
    number: "18",
    title: "Permissions Matrix",
    difficulty: "Hard",
    themes: "hierarchical state, diffing, payload shaping",
  },
  {
    slug: "19-interview-scheduler",
    number: "19",
    title: "Interview Scheduler",
    difficulty: "Hard",
    themes: "timezones, overlap rules, editing",
  },
  {
    slug: "20-market-watch",
    number: "20",
    title: "Market Watch",
    difficulty: "Hard",
    themes: "race conditions, caching, resilient async UI",
  },
];

export function getTaskBySlug(slug: string) {
  return tasks.find((task) => task.slug === slug) ?? null;
}
