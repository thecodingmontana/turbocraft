# Turbo Craft

Basic template for Modern **Full Stack Web Developers**.
Powered with several **Linting Tools** and **Commit Hooks**, it will help you code *faster* and *better*.

### Monorepo features

- [Turborepo][Turborepo] - for *faster builds*
- [degit][degit] - project scaffolding
- [taze][updates] for update packages

### Commit Conventions and Git Hooks

- [Lefthook][Lefthook] for **GitHub Hooks**:
- [commitlint][commitlint] - Lint commit messages
- [commitizen][commitizen] - commit conventions
- [cz-git][cz-git] - commitizen adapter with emoji

### Linters

- [Biome][Biome] - **ESLint** and **prettier** alternative
- [TypeScript][TypeScript] for static type checking as **internal package**
- [Renovate][Renovate]- Dependency updater
- [knip][knip]- Cut the clutter from TypeScript projects
- [MarkdownLint][MarkdownLint] for linting markdown, see [MarkdownLint rules][MarkdownLint-rules] (as VS Code suggested plugin)
- [VSCode & Zed Settings][vscode-settings & zed-settings] - workspace settings

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting started

```sh
pnpm dlx degit thecodingmontana/turbocraft my-app
cd my-app
pnpm install
```

To run:

```sh
pnpm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Monorepo Internal Packages

To reference packages use the `workspace:*` key (see [workspaces][pnpm-workspaces]) :

```json
{
  "name": "@repo/a",
  "dependencies": {
    "@repo/b": "workspace:*"
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Generators

Learn more about Turborepo Generators at [turbo: code-generation][turbo-generation]

**Generate New app or package**:

```sh
turbo gen workspace
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing to TurboCraft

Check [CONTRIBUTING][contributors-doc] for

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Inspired By

- [mugencraft/turbobun](https://github.com/mugencraft/turbobun)
- [u1aryz/bun-biome-template](https://github.com/u1aryz/bun-biome-template)
- [codiplace/bun-monorepo](https://github.com/codiplace/bun-monorepo)
- [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

[MIT License](license-url)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-url]: (https://github.com/mugencraft/turbobun/graphs/contributors)
[contributors-doc]: (./docs/CONTRIBUTING.md)
[forks-url]: (https://github.com/thecodingmontana/turbocraft/network/members)
[stars-url]: (https://github.com/thecodingmontana/turbocraft/stargazers)
[issues-url]: (https://github.com/thecodingmontana/turbocraft/issues)
[license-url]: (./LICENSE)
