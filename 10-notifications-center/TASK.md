# 10. Notifications Center

You are given a notifications screen backed by a polling API.

Implement:

1. Filtering between all and unread notifications.
2. Marking one or all notifications as read.
3. Safe polling with cleanup.
4. Deduplication when new fetches contain previously seen items.

Potential flaws:

- The current effect leaks intervals.
- New server data can overwrite local read state.
- Be ready to explain the merge strategy you choose.
