import LoginPageObject from "../pages/LoginPageObject";
import {browser, ExpectedConditions} from "protractor";
import LandingPageObject from "../pages/LandingPageObject";

describe('Myh First test', () => {
    let landingPage: LandingPageObject = new LandingPageObject();
    let loginPage: LoginPageObject = new LoginPageObject();

    it('Does something', async () => {
        await browser.get('https://esg.staging.scalingfunds.com/');

        await landingPage
            .clickLoginButton();
        await loginPage
            .inputEmail('georgi.petkov+oonly@scalingfunds.com')
        await loginPage
            .inputPassword('Hope1234!')
        await loginPage
            .clickLogin();

        // let isRedirectCorrect = (await browser.getCurrentUrl()).includes("/investor/my-investments/fund");
        //
        // expect(isRedirectCorrect).toBeTrue();

        waitUntilUrlContains('/investor/my-investments/fund')
    })

    async function waitUntilUrlContains(urlPart: string) {
        return browser.wait(ExpectedConditions.urlContains(urlPart), 10000,
            `URL didnt contain ${urlPart} after 10 seconds`
        );
    }
})