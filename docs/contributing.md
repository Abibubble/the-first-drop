# Contributing

The following contributing guidelines are designed to ensure consistency.

## General

- Keep all documentation updated
- Use CSS variables where possible, add comments to explain reasoning if variables aren't used

## Component design

- Be mindful of HTML semantics and accessibility when building new components and pages
- All components should be functional, rather than class-based
- Components should be styled using modular CSS and CSS variables

## Writing tests (Not currently set up)

- Use Jest snapshot testing
- Create a new test suite for each component
- Add new tests to existing suites where appropriate
- Use snapshot testing where possible, [more info](https://jestjs.io/docs/snapshot-testing)
- Ensure all tests pass after making code changes
  - If this requires updating snapshots, only do so once you have confirmed the snapshot updates are relevant to your changes
