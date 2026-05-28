# 18. Permissions Matrix

You are given a permissions editor for application modules and actions.

Implement:

1. Parent toggles that affect all child permissions in a module.
2. Correct indeterminate behavior when only some child permissions are enabled.
3. Dirty-state tracking against the original permissions.
4. A minimal save payload containing only granted permissions.

Things to notice:

- This exercise is more about state modeling than styling.
- Be ready to explain the tradeoff between flat and nested permission maps.
