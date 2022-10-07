# Contributing

The following contributing guidelines are designed to ensure consistency.

## General

- Keep all documentation updated
- Use CSS variables where possible, add comments to explain reasoning if variables aren't used
- If non-variable pixel values are used, they must be a multiple of 8, i.e. 64px, 80px, 240px, etc.
- Borders must be a minimum of 2px thickness, which does not require a comment
- Before committing your code, run `npm run commit:check` and ensure that your code passes all linting and tests before pushing

## Component design

- Be mindful of HTML semantics and accessibility when building new components and pages
- All components should be functional, rather than class-based
- Components should be styled using modular CSS and CSS variables

## Writing tests

- Use Jest snapshot testing
- Create a new test suite for each component
- Add new tests to existing suites where appropriate
- Use snapshot testing where possible, [more info is available here](https://jestjs.io/docs/snapshot-testing)
- Ensure all tests pass after making code changes before pushing your changes
  - If this requires updating snapshots, only do so once you have confirmed the snapshot updates are relevant to your changes
