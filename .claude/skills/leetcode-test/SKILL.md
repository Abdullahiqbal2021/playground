---
name: leetcode-test
description: Write vitest test cases for a leet-code/* solution based on the official LeetCode problem statement, not the user's implementation. Use whenever asked to add/write/generate tests for a file under leet-code/easy or leet-code/medium.
---

# LeetCode Test Writer

Write test cases derived from the **problem's specification**, never from tracing through the user's solution code.

> The goal is a test that catches bugs, not one that rubber-stamps whatever the current implementation happens to return.

## Golden rules

| # | Rule | Why |
|---|------|-----|
| 1 | **Never edit the solution file.** Only create/edit the matching `*.test.ts` file — no "fixing", refactoring, or reformatting the implementation. | A failing test against a buggy solution is the correct, expected output. |
| 2 | **Source the spec, not the code.** Find the LeetCode URL (`// https://leetcode.com/problems/<slug>/` at the top of the solution file, or its folder name) and `WebFetch` it for real constraints/examples. | Keeps expectations independent of the implementation. |
| 3 | **Derive expected values yourself.** Compute them from the problem's rules/examples — never by running the user's function and copying its output. | Otherwise a buggy solution just tests itself. |
| 4 | **Cover the constraints, not just the happy path.** Empty input, single element, duplicates, negatives, min/max bounds, already-solved input, etc. | ~3-5 cases is typical. |

If the LeetCode page can't be fetched, fall back to any example already documented in the solution file's comments (e.g. a JSDoc block) or well-known constraints for that classic problem — but say so explicitly when reporting back.

## Repository conventions

Match the existing style in `leet-code/easy/**/*.test.ts` exactly:

- **Header** — first line is `// https://leetcode.com/problems/<slug>/description/`.
- **Imports** — blank line, then:
  ```ts
  import { expect, test } from "vitest";

  import { <exportedName> } from "./<file>.js";
  ```
  Note the `.js` extension on a `.ts` source file (NodeNext module resolution).
- **Test names** — `test("testing <fnName> for test N", () => { ... })`, numbered sequentially from 1. This is the dominant pattern. Only use descriptive sentence-style names (like `sleep.test.ts`) when that's already the pattern for that kind of problem (e.g. async/timing behavior).
- **Assertions** — `toStrictEqual` for arrays/objects, `toBe` for primitives/booleans.
- **Async solutions** — `test(...)` callbacks are `async ()` and use `await`.
- **Linked-list / tree problems** — reuse shared structures, don't duplicate:
  1. Search first: `grep -r "buildList\|buildTree" leet-code`.
  2. Found something? Import and reuse it — don't redefine `ListNode`/`TreeNode`/`buildList`/`buildTree` locally.
  3. Nothing found? Create **one** generic shared helper module (e.g. `leet-code/_helpers/list-node.ts`, `leet-code/_helpers/tree-node.ts`) and import it. Ask the user where to put it if the repo layout makes that ambiguous.

## After writing

**Do not run the tests.** Write the test file and stop — no `vitest` or other verification commands. If the spec-derived expectations disagree with the user's implementation, that will surface when *they* run it. Do not touch the solution file to make anything pass.
