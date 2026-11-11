// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// This site has no server-side data: the contact form posts straight to Formspree
// from the browser. So every route is rendered to a plain .html file at build time
// and the result can be served by any static host, including GitHub Pages.
//
// `PAGES_BASE` is the path the site will be served from. GitHub Pages serves a
// user/site repo (username.github.io) or a custom domain at "/", but a project
// repo is served from "/<repo-name>/", so the CI workflow sets this to match.
const pagesBase = process.env["PAGES_BASE"] || "/";

export default defineConfig({
  vite: {
    base: pagesBase,
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
