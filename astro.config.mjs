import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite = repo?.endsWith('.github.io');

const base = process.env.PUBLIC_BASE_PATH
  ?? (isGitHubActions && repo && !isUserSite ? `/${repo}/` : '/');

const site = process.env.PUBLIC_SITE_URL
  ?? (isGitHubActions && owner && repo
    ? `https://${owner}.github.io${isUserSite ? '/' : `/${repo}/`}`
    : 'https://example.com/');

export default defineConfig({
  output: 'static',
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
