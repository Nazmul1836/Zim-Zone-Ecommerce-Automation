import { test, expect } from '@playwright/test';
import { Search } from '../Pages/Search';
import { AddToCart } from '../Pages/AddToCart';
test('User searches and adds product to cart', async ({ page }) => {
  const search = new Search(page);
  const addToCart = new AddToCart(page);
  const productName = 'ADDIS 300g MOP WITH HANDLE';
  await search.navigateTo('/');
  await search.searchFunction(productName);
  await addToCart.addToCartFunction();
});