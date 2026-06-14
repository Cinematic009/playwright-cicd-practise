import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Changed to false for CI stability against public practice endpoints
  fullyParallel: false, 
  forbidOnly: !!process.env.CI,
  
  // 🎯 FIXED: Changed from 2 to 0 so it fails fast in CI instead of looping forever
  retries: process.env.CI ? 0 : 0, 
  workers: process.env.CI ? 1 : undefined,
  
  /* Give each test a strict maximum of 35 seconds to execute */
  timeout: 35000,
  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report' }]
  ],

  use: {
    headless: process.env.CI ? true : true, // 👈 Kept your smart toggle!
    screenshot: 'only-on-failure',
    trace: 'on',
    
    // 🛡️ Network Guards: Prevent hanging if the practice site gets slow
    actionTimeout: 10000,
    navigationTimeout: 15000, 
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});