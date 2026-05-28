# React + TypeScript Interview Pack

This pack contains 20 self-contained interview exercises.

It is now a runnable Vite workspace with shared tooling and per-task entry pages.

Each task has:

- `TASK.md`: the prompt, feature list, and interview notes
- `src/`: starter React + TypeScript code
- `index.html`: a direct entry page for that task

## Running the pack

From the pack root:

```bash
pnpm install
pnpm dev
```

Then open:

- `/` for the task list
- `/<task-folder>/` for a specific exercise

Examples:

- `/01-messages-search-pagination/`
- `/12-infinite-activity-feed/`
- `/20-market-watch/`

The shared workspace uses:

- one root `package.json`
- one root Vite config
- one shared task shell and stylesheet
- dynamic loading of each task's `src/App.tsx`

Recommended way to use this pack:

1. Pick a numbered folder.
2. Create a worktree or branch for that exercise.
3. Run the shared dev server and open that folder's path in the browser.
4. Implement the requested features, and refactor the starter code where needed.
5. Talk through tradeoffs, data flow, typing, testing strategy, and edge cases.

Task list:

| # | Task | Difficulty | Themes |
| --- | --- | --- | --- |
| 01 | Messages Search & Pagination | Easy | async data, filtering, pagination |
| 02 | Employee Directory | Easy | filtering, sorting, selection |
| 03 | Todo Board | Easy | local state, persistence, mutation bugs |
| 04 | Product Table | Easy-Medium | sorting, selection, derived state |
| 05 | Search Autocomplete | Medium | debouncing, stale requests, keyboard UX |
| 06 | Tabs With Unsaved Changes | Medium | controlled forms, guards, keyboard nav |
| 07 | Preferences Form | Medium | validation, dirty state, async save |
| 08 | File Explorer | Medium | recursive data, immutable updates, search |
| 09 | Comment Thread | Medium | nested state, optimistic UI, collapse |
| 10 | Notifications Center | Medium | polling, cleanup, dedupe, filters |
| 11 | Kanban Lite | Medium | reducers, drag-like moves, invariants |
| 12 | Infinite Activity Feed | Medium | pagination, infinite loading, dedupe |
| 13 | Checkout Wizard | Medium | multistep flow, validation, totals |
| 14 | Availability Calendar | Medium | date selection, range logic, constraints |
| 15 | Seat Selector | Medium | grid selection, pricing, accessibility |
| 16 | Analytics Dashboard | Medium-Hard | caching, URL state, async errors |
| 17 | Recipe Builder | Medium | parsing, derived values, forms |
| 18 | Permissions Matrix | Hard | hierarchical state, diffing, payload shaping |
| 19 | Interview Scheduler | Hard | timezones, overlap rules, editing |
| 20 | Market Watch | Hard | race conditions, caching, resilient async UI |

Assumptions for all tasks:

- You may add files, components, hooks, tests, or utilities.
- You may refactor the starting code.
- You do not need to preserve the exact markup if a better structure helps.
- If the starter has flaws, fixing them is part of the exercise.
