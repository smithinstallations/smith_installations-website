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
// `base: "./"` makes the built page reference its assets by relative path, so the
// same build works at the site root (user.github.io or a custom domain) and under
// a project subpath (user.github.io/repo/).
export default defineConfig({
  vite: {
    base: "./",
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  // GitHub Pages serves files only; the Cloudflare server bundle is not needed.
  nitro: false,
});
