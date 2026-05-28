# 20. Market Watch

You are given a quote viewer with tabs for a few market symbols.

Implement:

1. Loading a quote when the selected symbol changes.
2. Preventing stale responses from overwriting newer selections.
3. Caching previously loaded symbol data.
4. Retryable loading and error states.

Notes:

- The mock API returns with intentionally uneven delays.
- This is a good exercise for discussing request lifecycle and state shape.
