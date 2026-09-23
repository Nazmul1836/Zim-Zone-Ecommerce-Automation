import { test, expect } from '@playwright/test';
import { CheckOut } from '../Pages/CheckOut';
import { Search } from '../Pages/Search';
import { RemoveFromCart } from '../Pages/RemoveFromCart';
import { LoginPage } from '../Pages/LoginPage';
import { AddToCart } from '../Pages/AddToCart';

test('User checks out', async ({ page }) => {   
    const checkOut = new CheckOut(page);
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
  await expect(
  page.getByText('Order summary')
).toBeVisible();

});