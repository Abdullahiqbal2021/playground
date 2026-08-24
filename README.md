<div align="center">

# 🛝 Playground

Small coding challenges and scripts — kept mostly to stay sharp.

![Node](https://img.shields.io/badge/node-%3E%3D22-339933?logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11.9.0-F69220?logo=pnpm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-black)

</div>

---

## 📁 Structure

| Path | What's in it |
| --- | --- |
| [`leet-code/`](leet-code) | Solutions by difficulty (`easy`, `medium`), one folder per problem |
| [`scripts/`](scripts) | Standalone TS/JS scripts — wordle solver, recursive renamer, markdown-to-csv, JSON merger |
| `helpers/`, `types/`, `config/` | Shared utilities and configuration |

## 🚀 Setup

```bash
pnpm install
```

## 🧰 Commands

| Command | Description |
| --- | --- |
| `pnpm test` | run tests in watch mode |
| `pnpm test-ui` | run tests with the Vitest UI |
| `pnpm typecheck` | type-check test files |
| `pnpm tsc` | type-check the whole project |
| `pnpm lint` | lint, format, and spellcheck |
| `pnpm format` | format with Prettier |
| `pnpm spellcheck` | run cspell |

## ✅ Requirements

Node ≥ 22 · pnpm 11.9.0
