const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 60 * 1000, // Global timeout for each test
  use: {
    browserName: 'chromium', // Use chromium browser for tests
    trace: 'on-first-retry', // Trace collection for debugging
  },
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
});
