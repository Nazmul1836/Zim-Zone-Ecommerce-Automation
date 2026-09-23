import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class PickupPointPhoneValidation extends BasePage {
    readonly pickupPointCheckBox: Locator;  
    readonly selectPickupPoint: Locator;  
    readonly pickupPointLocation: Locator;
    readonly pickupPoint: Locator;
    readonly nextButton: Locator;
    readonly collectorName: Locator;
    readonly collectorIdentificationNumber: Locator;
    readonly collectorEmail: Locator;
    readonly collectorPhoneNumber: Locator;
    constructor(page: Page) {       
        super(page);
        this.pickupPointCheckBox = page.getByLabel('Pickup')
        this.selectPickupPoint = page.getByTitle('Select pickup point location')
        this.pickupPointLocation = page.getByTitle('Select pickup point location')
        this.pickupPoint = page.getByText('Fedex - Binga | Binga,Matabeleland North | $5.00 | DELIVERY WITHIN WORKING DAYS: 4', { exact: true })
        this.nextButton =  page.getByRole('button', { name: 'Next' })
        this.collectorName = page.getByRole('textbox', { name: 'Collector Name:' })
        this.collectorIdentificationNumber = page.getByRole('textbox', { name: 'Collector Identification Number:' })
        this.collectorEmail = page.getByRole('textbox', { name: 'Collector Email:' })
        this.collectorPhoneNumber = page.getByRole('textbox', { name: 'Collector Phone Number:' })
    }
     async clickPickupPointCheckBox() {
        await this.click(this.pickupPointCheckBox);
    }

    async selectPickupPointLocation() {
        await this.click(this.selectPickupPoint);
        await this.click(this.pickupPoint);    
}
async clickOnNextButton() {
    await this.click(this.nextButton);
}
async fillAlltheFields(CollectorName: string,CollectorIdentificationNumber: string,CollectorEmail: string,CollectorPhoneNumber: string
    ) 
{
    await this.fill(this.collectorName,CollectorName);
    await this.fill(this.collectorIdentificationNumber,CollectorIdentificationNumber);
    await this.fill(this.collectorEmail,CollectorEmail);
    await this.fill(this.collectorPhoneNumber,CollectorPhoneNumber);
}
}