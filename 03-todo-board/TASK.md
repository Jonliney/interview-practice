# 03. Todo Board

You are given a compact todo board with three statuses.

Implement:

1. Adding a new todo.
2. Filtering by status.
3. Editing a todo title inline.
4. Persistence to `localStorage`.

Potential flaws:

- One of the update paths mutates state directly.
- The current UI does not preserve any user progress after refresh.
- The input flow is intentionally barebones.
