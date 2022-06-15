import BasePageObject from "./BasePageObject";
import {by, element} from "protractor";

export default class LandingPageObject extends BasePageObject {
    private loginButton = element(by.xpath('//*[@id="hero-background"]/div[1]/div[2]/div/h5[2]/a'))

    public async clickLoginButton() {
        await this.clickElementWhenClickable(this.loginButton);
    }
}