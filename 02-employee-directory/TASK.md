# 02. Employee Directory

You are given a small employee directory with a list and a details pane.

Implement:

1. Filtering by team.
2. Sorting by either `name` or `startDate`.
3. A text search against employee names.
4. A cleaner selection experience when the visible list changes.

Things to notice:

- The current list uses an unstable key.
- The selected employee can become confusing after filtering.
- Be ready to talk through derived state versus stored state.
