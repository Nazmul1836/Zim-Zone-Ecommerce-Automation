import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class CheckOut extends BasePage {
    readonly checkBox: Locator;
    readonly checkoutButton: Locator; 
    readonly sameAddressCheckbox: Locator;
    readonly selectAdressButton: Locator;
  
    constructor(page: Page) {
        super(page);
        this.checkBox =page.locator('div.terms-of-service')
        this.checkoutButton =page.getByRole('button', { name: 'Checkout' })
        this.sameAddressCheckbox =  page.getByText('Ship to the same address (Select if the billing address is Harare, Bulawayo, Mutare and Gweru)', { exact: true })
        this.selectAdressButton = page.getByRole('button', { name: 'Bill to this address' })
    }  
    async checkOutFunction() {
     await this.click(this.checkBox);
     await this.click(this.checkoutButton);
    }
    async selectAddress() {
        await this.click(this.sameAddressCheckbox);
        await this.click(this.selectAdressButton);
    }
}   