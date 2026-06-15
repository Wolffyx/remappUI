# @remappr/ui

Shared UI primitives for Remappr apps (the builder + the desktop app), extracted from the
Remappr app. shadcn-style components on Radix, plus the design **theme tokens**.

## Install

```sh
pnpm add @remappr/ui
```

Scoped to GitHub Packages — consumers need an `.npmrc`:

```
@remappr:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

`react` / `react-dom` (v19) are **peer dependencies**.

## Usage

```tsx
import { Button, Dialog, cn } from '@remappr/ui'
// or per-component: import { Button } from '@remappr/ui/button'
import '@remappr/ui/styles.css' // theme tokens (CSS variables)
```

### Tailwind 4

The consumer runs its own Tailwind. Add this package to the content/source scan so its
classes are generated:

```css
@source "../node_modules/@remappr/ui/dist";
```

Import `@remappr/ui/styles.css` once for the theme tokens (`--primary`, `--card`,
`--sidebar`, `--radius`, …, light/dark + named themes). Fonts are app assets — the consumer
declares its own `@font-face`.

## Components

button, card, checkbox, command, dialog, dropdown-menu, ErrorBoundary, field, input, label,
modal, popover, scroll-area, segmented, select, separator, sheet, sidebar, skeleton, sonner,
switch, tabs, tooltip. Plus `cn()` and `useIsMobile()`.

## Scripts

`pnpm build` (tsup → ESM + d.ts), `pnpm dev` (watch), `pnpm typecheck`.
