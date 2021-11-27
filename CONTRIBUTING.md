# Contributing to Octalign mars

We would love for you to contribute to Octalign mars!
This file will explain to you how you can do that.

- [Found a Bug?](#found-a-bug-)
- [Missing a Feature?](#missing-a-feature-)
- [Submission Guidelines](#submission-guidelines)
  - [Submitting an Issue](#submitting-an-issue)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [Development environment](#development-environment)
- [Code Guidelines](#code-guidelines)
- [Commits](#commits)
  - [Types](#types)

## Found a Bug?

If you come across a bug in Octalign mars, you can help us by [submitting an issue](#submitting-an-issue) to the repository.
Or you can [submit a Pull Request](#submitting-a-pull-request) with a fix.

## Missing a Feature?

You can *request* a new feature by [submitting an issue](#submitting-an-issue) to the repository.
You can also *implement* a new feature, but consider the size of the change in order to determine the steps to proceed:

- For a small feature you can go ahead and [submit a Pull Request](#submitting-a-pull-request)
- For a large feature you should [submit an issue](#submitting-an-issue) first explaining what you want to implement so that the new feature can be discussed before you spend a lot of effort for a feature that will not be implemented (yet).

## Submission Guidelines

### Submitting an Issue

When submitting an Issue, please follow the questions and guidelines in the template.

### Submitting a Pull Request

When submitting a Pull Request (PR), please follow the questions and guidelines in the template.

If you started to work on something but did not finish it yet, you can open a Draft Pull Request.

Once you open a Pull Request, the automated checks will not run automatically. One of the Octalign team members will have to approve this. This will typically happen within 24 hours.

Since the automated checks will not run automatically, you should run the checks locally as well. This includes `npm run lint`, `npm run test` and `npm run test:e2e` which are also executed with the pre-commit hook of Husky. Additionally it will run `npm run build`.

All automated checks need to pass before merging.
If a check fails but it is unrelated to your changes, one of the team members will re-run the checks for you.

## Development environment

The easiest way to work on Octalign mars is use create a [GitHub Codespace](https://github.com/features/codespaces) for this repository.
Once you have made connection to the Codespace you can use `npm start` to run a local version of Octalign mars.

## Code Guidelines

We have some guidelines to ensure consistency throughout the codebase.
Most of these are enforced by ESLint/Prettier so make sure `npm run lint` passes before committing.
We also ask that all features and bug fixes are tested by specs (unit tests) and that public API methods are documented.

## Commits

We use the [Angular config](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-angular) of [commitlint](https://github.com/conventional-changelog/commitlint) to lint the commits.

This means that a commit message should look something like this: `fix(user): allow user to delete itself`.

### Types

The Angular config allows only for specific types.
Since the usage of these might differ across projects they have been explained in the table below.

| Type | Usage |
| --- | --- |
| build | Changes to build system or dependencies |
| ci | Changes to CI configuration files and scripts |
| docs | Changes only to documentation |
| feat | New feature |
| fix | Bug fix |
| perf | Code change that improves performance |
| refactor | Code changes that neither fixes a bug nor adds a feature |
| revert | Reverting previous commits |
| style | Code change that improves code style |
| test | Adding missing tests or correcting existing tests |
