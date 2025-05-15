# Lunagent AI

A statically exported Next.js application powered by the App Router and TypeScript. Hosted on GitHub Pages at `https://<your-username>.github.io/LunagentAI/`.

## Prerequisites

* Node.js v15+ (LTS) installed
* npm (v8+) or Yarn
* Python3
* Git

## Clone & Install

```bash
git clone https://github.com/AmerAmmari/LunagentAI.git
cd LunagentAI
npm install
```


## Making Changes

* Update source files under **app/**, **components/**, or **public/**.
* Any React or static asset changes will be picked up in the next build.

## Build & Deploy

This project uses Next.js static export and the `gh-pages` package to push to the **gh-pages** branch.

```bash
npm run build      # builds & exports static files into out/
npm run deploy     # publishes out/ (including dotfiles) to gh-pages branch
```

> The `deploy` script runs `gh-pages --dotfiles -d out`, ensuring `_next/` and `.nojekyll` are included.

After deployment, your site will be live at:
`https://<your-username>.github.io/LunagentAI/`

## NPM Scripts

| Script   | Description                                        |
| -------- | -------------------------------------------------- |
| `build`  | Builds & static exports into `out/`                |
| `deploy` | Pushes `out/` to `gh-pages` branch (with dotfiles) |

## Project Layout

```
LunagentAI/
├─ app/               # Next.js App Router source
├─ components/        # React components
├─ public/            # Static assets (images, icons)
├─ scripts/           # Helper scripts (e.g. fix-assets)
├─ out/               # Auto-generated static export
├─ next.config.js     # Next.js configuration
├─ package.json       # npm scripts & dependencies
└─ README.md          # This documentation
```

## Translation Changes
To modify translation, simply change the text in LunagentAI/lib/translations/<language>.ts

