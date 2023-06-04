export default {
  "*.{css, html, json, md}": ["pnpm run format:fix"],
  "*.{js, svelte, ts}": ["pnpm run format:fix", "pnpm run lint:fix"],
};
