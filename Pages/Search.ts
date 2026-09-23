import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class Search extends BasePage {
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly searchTermsList: Locator;

  constructor(page: Page) {
    super(page);
    this.searchField = page.getByRole('combobox', { name: 'Search store' })
      || page.locator('input[name="q"]')
      ||  page.getByPlaceholder('Search')
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.searchTermsList = page.locator('#small-searchterms-list');
  }
  async searchFunction(productName: string) {
    await this.fill(this.searchField, productName);
    await this.searchTermsList.waitFor({ 
      state: 'visible', 
      timeout: 30000 
    });
    await this.searchField.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }
}