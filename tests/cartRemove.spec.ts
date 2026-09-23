import { test, expect } from '@playwright/test';
import { AddToCart } from '../Pages/AddToCart';
import { Search } from '../Pages/Search';
import { RemoveFromCart } from '../Pages/RemoveFromCart';
test('User removes product from cart', async ({ page }) => {
  const removeFromCart = new RemoveFromCart(page);
  const addToCart = new AddToCart(page);
  const search = new Search(page);
  const productName = 'HOME QUIP FLEXILITE EXECUTIVE DESK LIGHT';
  await search.navigateTo('/');
  await search.searchFunction(productName);
  await addToCart.addToCartFunction();
  await removeFromCart.navigateToCart();
  await removeFromCart.removeFromCartFunction();
  await expect(
  page.getByText('Your Shopping Cart is empty!')
).toBeVisible();
});