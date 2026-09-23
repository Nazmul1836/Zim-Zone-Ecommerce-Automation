import { test, expect } from '@playwright/test';
import { Search } from '../Pages/Search';

const productName = 'SQUISH SQUASH ORANGE JUICE 5L';

test('User Search a Product', async ({ page }) => {
  const search = new Search(page);
  await search.navigateTo('/');
  await search.searchFunction(productName);

  await expect(
    page.getByRole('heading', { name: /SQUISH SQUASH ORANGE JUICE/i })
  ).toBeVisible({ timeout: 20000 });
});