import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class AddToCart extends BasePage {
    readonly addToCartButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' })
        this.continueShoppingButton = page.getByRole('link', { name: 'Continue Shopping' })

    }

    async addToCartFunction() {
        await this.waitForLoad();
        await this.click(this.addToCartButton);
        await this.continueShoppingButton.waitFor({ state: 'visible', timeout: 50000 });
        await this.click(this.continueShoppingButton);
    }
}