import { test, expect } from '@playwright/test';
import { CheckOut } from '../Pages/CheckOut';
import { Search } from '../Pages/Search';
import { RemoveFromCart } from '../Pages/RemoveFromCart';
import { LoginPage } from '../Pages/LoginPage';
import { AddToCart } from '../Pages/AddToCart';
import { CheckOutPhoneValidation } from '../Pages/Checkout Phone Validation';

test('Validates Zimbabwean phone number during checkout', async ({ page }) => {   
    const checkOut = new CheckOut(page);
    const checkOutPhoneValidation = new CheckOutPhoneValidation(page);
    const search = new Search(page);
    const addToCart = new AddToCart(page);
    const removeFromCart = new RemoveFromCart(page);
    const loginPage = new LoginPage(page);
    const productName = 'ADDIS 300g MOP WITH HANDLE';
  await loginPage.navigateTo('/');
    await loginPage.login(
        process.env.LOGIN_EMAIL!,
        process.env.LOGIN_PASSWORD!
    )
  await search.searchFunction(productName);
  await addToCart.addToCartFunction();
  await removeFromCart.navigateToCart();
  await checkOut.checkOutFunction();
  await checkOut.selectAddress();
  await checkOutPhoneValidation.validatePhoneNumber();
  await expect(
  page.locator(':text-is("Please use a valid Zimbabwean phone number.")')
  ).toBeVisible();
});