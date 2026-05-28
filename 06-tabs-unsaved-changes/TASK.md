# 06. Tabs With Unsaved Changes

You are given a small tabbed editor with three draft documents.

Implement:

1. Switching between tabs.
2. Tracking unsaved changes per document.
3. A warning or guard before discarding unsaved edits when switching tabs.
4. Keyboard navigation across tabs.

Optional extension:

- Add save and reset actions.

Things to discuss:

- Whether draft state should live per tab or in a normalized map.
- How you would make the interaction testable.
