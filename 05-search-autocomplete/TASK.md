# 05. Search Autocomplete

You are given an autocomplete input backed by a mock async API.

Implement:

1. Debounced searching.
2. Protection against stale responses overwriting newer results.
3. Keyboard navigation with up/down arrows and enter to select.
4. Loading, empty, and error states.

Notes:

- The current code issues a request on every keystroke.
- The mock API intentionally resolves with varying latency to expose race conditions.
- You may choose `AbortController`, a request id strategy, or another approach.
