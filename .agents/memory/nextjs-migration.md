---
name: Next.js 15 App Router migration patterns
description: Rules for migrating Vite React to Next.js 15 with output:export; hydration pitfalls and dynamic route setup
---

## Rules

**Dynamic routes with `output: 'export'`** — the `page.tsx` for `[slug]` routes must be a server component (no `'use client'`). Export `generateStaticParams` from it, and import+render the client component separately. If you `export { default } from "client-component"`, the page becomes a client module and `generateStaticParams` is silently ignored.

**Why:** Next.js enforces that `generateStaticParams` comes from a server module. Re-exporting from a `'use client'` module propagates the client boundary to the page file.

**How to apply:** Always write `app/[slug]/page.tsx` as a thin server wrapper:
```tsx
import ClientPage from "../../pages/ClientPage";
export function generateStaticParams() { ... }
export default function Page() { return <ClientPage />; }
```

**Hydration mismatches from `Math.random()`** — any `Math.random()` called during render (in JSX) produces different values on server vs client, causing hydration errors. Fix by hoisting random data to module-level constants (evaluated once per module load, same on server and client).

**Why:** SSR renders the component on the server, then React re-renders on the client. If render output differs, React throws a hydration mismatch.

**How to apply:** Move random arrays/values to `const FOO = [...]` outside the component function.

**Hydration mismatches from `window.location.href`** — the `typeof window !== 'undefined' ? window.location.href : ''` pattern still causes mismatches because server=`''` and client=real URL. Use `useState('')` + `useEffect(() => setUrl(window.location.href), [])` instead.

**`allowedDevOrigins`** — Replit proxies requests from `*.pike.replit.dev`. Add `allowedDevOrigins: ["*.replit.dev", "*.pike.replit.dev"]` to `next.config.ts` to suppress the dev warning.

**`metadataBase`** — set `metadataBase: new URL("https://yourdomain.com")` in `export const metadata` (in `layout.tsx`) to fix OG image URL resolution warnings.
