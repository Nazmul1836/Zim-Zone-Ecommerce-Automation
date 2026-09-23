# Zim-Zone Ecommerce - Web Automation Framework
A production-grade web test automation framework designed and engineered for the Zim-Zone Ecommerce platform. Built using TypeScript, Node.js, Playwright, and Page Object Model (POM) architecture.

## 📱 Target Application Overview
- **Application Name**: Zim-Zone Ecommerce
- **App Tech Stack**: Web Application
- **Key Modules Automating**:
  - Authentication (Login)
  - Search functionality
  - Cart Management (Add to Cart, Remove from Cart)
  - Checkout Process (Validation, Phone Number Rejections, Pickup Points)

## 🛠️ Technology Stack
- **Language**: TypeScript
- **Runtime**: Node.js (v18+)
- **Package Manager**: npm
- **Automation Driver**: Playwright
- **Framework / Runner**: @playwright/test
- **Design Pattern**: Page Object Model (POM)
- **Environment Config**: dotenv

## 📁 Project Architecture
```text
zim-zone-ecommerce-automation/
│
├── package.json
├── package-lock.json
├── playwright.config.ts        # Playwright Configuration
├── tsconfig.json               # TypeScript Configuration
├── README.md                   # Technical Documentation
├── .gitignore                  # Git Ignore Policies
├── .env                        # Local Environment Config (ignored in Git)
│
├── Pages/                      # Page Object Model Layer
│   ├── BasePage.ts             # Base Page Object
│   ├── LoginPage.ts            # Login Selectors/Actions
│   ├── Search.ts               # Search workflows
│   ├── AddToCart.ts            # Cart addition actions
│   ├── RemoveFromCart.ts       # Cart removal actions
│   ├── CheckOut.ts             # Checkout flow
│   └── ...                     # Other Validation POMs
│
├── tests/                      # E2E Test Suites
│   ├── login.spec.ts
│   ├── search.spec.ts
│   ├── Addtocart.spec.ts
│   ├── cartRemove.spec.ts
│   ├── userCheckOut.spec.ts
│   └── ...                     # Other specific test files
│
├── playwright-report/          # Generated HTML Test Reports
└── test-results/               # Captured Failure Screenshots/Traces
```

## ⚙️ Prerequisites
Before executing tests, ensure the following are installed on your machine:

- **Node.js**: v18.0.0 or higher (`node -v`)
- **Git**: (`git --version`)

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nazmul1836/Zim-Zone-Ecommerce-Automation.git
   cd ecom-playwright-ts
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:
   ```bash
   npx playwright install
   ```

4. **Configure Environment Variables**:
   Create a `.env` file in the root directory and update it with your test credentials.

## 🏃 Running Tests

**Execute All Regression Tests (Headless)**
```bash
npx playwright test
```

**Execute Tests in UI Mode**
```bash
npx playwright test --ui
```

**Execute Specific Test Suite (e.g., Login)**
```bash
npx playwright test tests/login.spec.ts
```

**Execute Tests in Headed Mode**
```bash
npx playwright test --headed
```

## 🛡️ Security & Sensitive Data Protection
- All credentials and sensitive test data are driven via environment variables (`.env`).
- `.env` is strictly ignored by Git to prevent accidental exposure of secrets.

## 📸 Failure Screenshots & Reporting
- By default, Playwright captures a full trace, video, and screenshot on test failure.
- These artifacts are stored in the `./test-results/` directory.
- An interactive HTML report is automatically generated under `./playwright-report/` which can be viewed by running:
  ```bash
  npx playwright show-report
  ```

## ❓ Troubleshooting
- **Tests not running or browser issues**: Ensure you have installed Playwright browsers via `npx playwright install`.
- **Environment variables not loading**: Verify that your `.env` file is properly configured in the project root.
