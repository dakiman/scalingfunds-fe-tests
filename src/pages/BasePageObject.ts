import {browser, ElementFinder, ExpectedConditions} from "protractor";

export default class BasePageObject {
    private timeout = 10000;

    protected async clickElementWhenClickable(element: ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), this.timeout,
            `Element was not clickable: ${element.locator().value}`)
        element.click();
    }

    protected async inputText(element: ElementFinder, input: string) {
        await this.clickElementWhenClickable(element);
        await element.clear();
        await element.sendKeys(input);
    }

    protected async waitForElementToBeVisible(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), this.timeout,
            `Element was not visible within timeout period ${this.timeout},\n
            Element in question: ${element.locator().value}`);
    }
}