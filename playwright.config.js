import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  timeout: 30 * 1000, 
  retries: 0, 
  use: {
    baseURL: 'https://etherscan.io', 
     // headless: true,
     // screenshot: 'only-on-failure', 
     //video: 'retain-on-failure', 
     //trace: 'on-first-retry', 
  },
  reporter: [['list'], ['html']], 
});
