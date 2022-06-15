import BasePageObject from "./BasePageObject";
import {by, element} from "protractor";

export default class LoginPageObject extends BasePageObject {
    private emailInput = element(by.css('[name="email"]'));
    private passwordInput = element(by.css('[name="password"]'));
    private loginButton = element(by.buttonText('Login'));

    public async inputEmail(input: string) {
        await this.inputText(this.emailInput, input);
    }

    public async inputPassword(input: string) {
        await this.inputText(this.passwordInput, input);
    }

    public async clickLogin() {
        await this.clickElementWhenClickable(this.loginButton);
    }

}