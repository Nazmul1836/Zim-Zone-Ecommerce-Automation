# Zim-Zone Ecommerce Automation

This repository contains automated test scripts for the Zim-Zone Ecommerce platform, written using [Playwright](https://playwright.dev/) and TypeScript.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

To run the test suite:
```bash
npx playwright test
```

To run tests in UI mode:
```bash
npx playwright test --ui
```

## Structure
- `tests/`: Contains the test specifications.
- `Pages/`: Contains the Page Object Models used in tests.
