import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url); // default 'load' is fast enough
  }

  protected async click(element: Locator): Promise<void> {
    await element.click(); // auto-waits for visibility internally
  }

  protected async fill(element: Locator, value: string): Promise<void> {
    await element.fill(value); // auto-waits for visibility internally
  }
  async waitForLoad() {
  await this.page.waitForLoadState('domcontentloaded');
  await this.page.waitForTimeout(2000);
}
async  selectDropdownOption(
  page: Page,
  selector: string,
  option: string | { label?: string; value?: string; index?: number }
): Promise<void> {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible' });

  if (typeof option === 'string') {
    // Select by label text
    await locator.selectOption({ label: option });
  } else if (option.value !== undefined) {
    await locator.selectOption({ value: option.value });
  } else if (option.label !== undefined) {
    await locator.selectOption({ label: option.label });
  } else if (option.index !== undefined) {
    await locator.selectOption({ index: option.index });
  }
}
}
