# 12. Infinite Activity Feed

You are given a paginated activity feed backed by a mock API.

Implement:

1. Loading the first page on mount.
2. Loading subsequent pages with a `Load more` button or an intersection observer.
3. Deduping overlapping results between pages.
4. Loading and error states that do not break existing content.

Notes:

- The mock API intentionally returns one overlapping item on later pages.
- Be ready to explain how you would test this without relying on real scrolling.
