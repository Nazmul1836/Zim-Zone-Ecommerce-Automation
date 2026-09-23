import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('User logs in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo('/');

  await loginPage.login(
    process.env.LOGIN_EMAIL!,
    process.env.LOGIN_PASSWORD!
  );
  await loginPage.verifyLogin();


});

