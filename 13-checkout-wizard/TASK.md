# 13. Checkout Wizard

You are given a three-step checkout flow.

Implement:

1. Per-step validation before advancing.
2. A summary step with correct totals.
3. Saving and restoring an in-progress draft.
4. A clean way to manage the multistep state.

Potential issues:

- The starter stores all fields as strings.
- Totals are intentionally under-specified.
- This is a good candidate for a reducer or a schema-driven approach.
