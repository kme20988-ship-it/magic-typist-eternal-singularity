import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // eslint-disable-next-line no-undef
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

  return {
    base: isGitHubPages ? '/magic-typist-eternal-singularity/' : '/',
    plugins: [
      react(),
      wasm(),
      topLevelAwait()
    ],
  }
})
