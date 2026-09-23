import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class RemoveFromCart extends BasePage {
    readonly cartIcon: Locator;
    readonly removeButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cartIcon = page.locator('a.ico-cart')
        this.removeButton = page.locator('button.remove-btn')

    }
    async navigateToCart() {
        await this.page.locator('a.ico-cart').click({ force: true });
    }
    async removeFromCartFunction() {
        await this.click(this.removeButton);  
    }
}