import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class CheckOutPhoneValidation extends BasePage {
    readonly validationMessage: Locator;
    
    constructor(page: Page) {       
        super(page);
        this.validationMessage = page.getByText('Please use a valid Zimbabwean phone number.', { exact: true })
    }
    async validatePhoneNumber() {
        await this.validationMessage.waitFor({ state: 'visible', timeout: 50000 });
    }
}