# 09. Comment Thread

You are given a nested comment thread and a mock API for adding replies.

Implement:

1. Collapsing and expanding reply chains.
2. Adding a reply to any comment.
3. Optimistic UI for reply creation.
4. An error path for failed replies.

Things to notice:

- Nested state updates are the main challenge here.
- Be ready to discuss temporary client ids and rollback behavior.
