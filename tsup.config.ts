// pattern-check: skip — tsup build config; entry map derived from src/ui listing, no runtime logic
import { defineConfig } from 'tsup'
import { readdirSync } from 'node:fs'

// One entry per component (flattened to dist root, so `@remappr/ui/button` works)
// plus the barrel, cn, and the mobile hook. esbuild resolves the `@/` alias from
// tsconfig paths; `splitting` dedupes shared chunks (e.g. cn).
const components = readdirSync('src/ui')
    .filter((f) => f.endsWith('.tsx'))
    .map((f) => f.replace(/\.tsx$/, ''))

const entry: Record<string, string> = {
    index: 'src/index.ts',
    cn: 'src/lib/cn.ts',
    'use-mobile': 'src/hooks/use-mobile.ts',
}
for (const name of components) entry[name] = `src/ui/${name}.tsx`

export default defineConfig({
    entry,
    format: ['esm'],
    target: 'es2022',
    splitting: true,
    dts: true,
    clean: true,
    sourcemap: true,
    treeshake: true,
    external: ['react', 'react-dom', 'react/jsx-runtime'],
})
