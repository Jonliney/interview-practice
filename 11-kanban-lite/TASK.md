# 11. Kanban Lite

You are given a minimal kanban board with three columns.

Implement:

1. Adding a new task.
2. Moving tasks between columns.
3. Enforcing a WIP limit on the `doing` column.
4. Sorting tasks within a column by priority.

Potential flaws:

- The starter mutates nested state directly.
- This is a good exercise for extracting a reducer.
- Be ready to discuss stable task identity and invariant checks.
