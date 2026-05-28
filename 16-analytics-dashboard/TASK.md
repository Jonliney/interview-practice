# 16. Analytics Dashboard

You are given a compact analytics dashboard with two filters.

Implement:

1. Data fetching when filters change.
2. Caching results by filter combination.
3. Syncing the active filters to the URL.
4. A retry path for failed requests.

Potential discussion points:

- When to cache in component state versus a dedicated query layer.
- How to avoid unnecessary refetches when navigating back and forward.
