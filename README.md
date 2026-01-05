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
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mugencraft/turbobun.svg?style=for-the-badge
[contributors-url]: https://github.com/mugencraft/turbobun/graphs/contributors
[contributors-doc]: ./docs/CONTRIBUTING.md
[forks-shield]: https://img.shields.io/github/forks/mugencraft/turbobun.svg?style=for-the-badge
[forks-url]: https://github.com/mugencraft/turbobun/network/members
[stars-shield]: https://img.shields.io/github/stars/mugencraft/turbobun.svg?style=for-the-badge
[stars-url]: https://github.com/mugencraft/turbobun/stargazers
[issues-shield]: https://img.shields.io/github/issues/mugencraft/turbobun.svg?style=for-the-badge
[issues-url]: https://github.com/mugencraft/turbobun/issues
[license-shield]: https://img.shields.io/github/license/mugencraft/turbobun.svg?style=for-the-badge
[license-url]: ./LICENSE
[ROADMAP]: ./ROADMAP.md

[Bun]: https://bun.sh/
[bun-workspaces]: https://bun.sh/docs/install/workspaces
[bun-filter]: https://bun.sh/docs/cli/filter
[bunx]: https://bun.sh/docs/cli/bunx
[bun-run]: https://bun.sh/docs/cli/run
[bun-install]: https://bun.sh/docs/cli/install
[bun-add]: https://bun.sh/docs/cli/add
[bun-remove]: https://bun.sh/docs/cli/remove
[bun-update]: https://bun.sh/docs/cli/update

[Turborepo]: https://turbo.build/
[turbo-generation]: https://turbo.build/repo/docs/guides/generating-code
[turbo-codemod]: https://github.com/vercel/turborepo/blob/main/packages/turbo-codemod/turbo/generators/config.ts
[Plop]: https://plopjs.com/documentation/

[TypeScript]: https://www.typescriptlang.org/
[Renovate]: https://github.com/renovatebot/renovate
[degit]: https://github.com/Rich-Harris/degit

[Lefthook]: https://github.com/evilmartians/lefthook
[commitlint]: https://commitlint.js.org/
[commitizen]: https://commitizen.github.io/cz-cli/
[cz-git]: https://github.com/Zhengqbbb/cz-git

[vscode-settings]: https://code.visualstudio.com/docs/getstarted/settings#_settings-json-file
[vscode-extensions]: https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions
[Biome]: https://biomejs.dev/
[case-police]: https://github.com/antfu/case-police
[knip]: https://knip.dev/
[MarkdownLint]: https://github.com/DavidAnson/markdownlint
[MarkdownLint-rules]: https://github.com/DavidAnson/markdownlint/blob/main/schema/.markdownlint.jsonc
[updates]: https://github.com/raineorshine/npm-check-updates
[concurrently]: https://github.com/open-cli-tools/concurrently

[Elysia]: https://elysiajs.com/
[Next.js]: https://nextjs.org/

[github-registry]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file

[bun-biome-template]: https://github.com/u1aryz/bun-biome-template
[bun-monorepo]: https://github.com/codiplace/bun-monorepo
[Best-README]: https://github.com/othneildrew/Best-README-Template
