# 01. Messages Search & Pagination

You are given a simple messages app.

`api.ts` exposes `getMessages(): Promise<Message[]>`, which returns all messages after a simulated 300ms delay.

The UI renders:

- a search box at the top
- a list of messages
- a `Load more` button at the bottom

Implement:

1. Search with a partial, case-insensitive match against both `name` and `participants`.
2. Pagination or load-more behavior in the UI.
3. Reset the visible item count when the search term changes.
4. Reasonable loading and empty states.

Notes:

- You may keep client-side pagination or restructure it if you prefer.
- Be ready to explain the complexity of the search implementation.
- Watch out for edge cases when the filtered list becomes shorter than the current page size.
