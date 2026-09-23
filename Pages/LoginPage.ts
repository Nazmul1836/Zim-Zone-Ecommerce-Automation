import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class LoginPage extends BasePage {
    readonly logInIcon : Locator;
    readonly emailField: Locator;
    readonly passWord:Locator;
    readonly loginButton:Locator;
    readonly userName: Locator;



    constructor(page: Page) {
        super(page);
        this.logInIcon = page.locator('a.ico-account.opener')
        this.emailField= page.getByRole('textbox', { name: 'Email:' })
        this.passWord=page.getByRole('textbox', { name: 'Password:' })
        this.loginButton= page.getByRole('button', { name: 'Log in' })
        this.userName= page.getByRole('link', { name: 'Hasan' })
    }


    async login(email:string,password:string) {
        await this.click(this.logInIcon);
        await this.fill(this.emailField,email);
        await this.fill(this.passWord,password);
        await this.click(this.loginButton);
        
    }
    async verifyLogin() {
    await this.userName.waitFor({ state: 'visible', timeout: 15000 });
    

    }
}
