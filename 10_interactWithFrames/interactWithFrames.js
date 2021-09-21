import { browser, element, by, ExpectedConditions } from 'protractor';
import { protractor } from "protractor/built/ptor";
import 'regenerator-runtime/runtime';

/*
    On completion of this exercise, you can learn the following concepts.
        Target Locator
        switchTo()
        defaultContent()
        parentFrame()
*/

describe('Interacting with Frames - ', function () {

    it('Enter username on target frame', async () => {
        //Open URL
        await browser.get('https://letcode.in/frame');
        await browser.manage().window().maximize();

        //Switch to iframe with use of getWebElement
        await browser.switchTo().frame(element(by.id('firstFr')).getWebElement());

        //Enter text
        await element(by.name('fname')).sendKeys("Manmit");
        await browser.sleep(3000);
    })

    it('Switch back to default frame', async () => {
        //Open URL
        await browser.get('https://letcode.in/frame');
        await browser.manage().window().maximize();

        //Switch to iframe with use of getWebElement
        await browser.switchTo().frame(element(by.id('firstFr')).getWebElement());
        await browser.sleep(3000);

        //Switch back to defualt frame
        await browser.switchTo().defaultContent();
        let header = await element(by.tagName('h1')).getText();
        console.log(header)
    })

    it('Switch back to parent frame', async () => {
        //Open URL
        await browser.get('https://letcode.in/frame');
        await browser.manage().window().maximize();

        //Switch to iframe with use of getWebElement
        await browser.switchTo().frame(element(by.id('firstFr')).getWebElement());

        //Switch to inner iframe with use of getWebElement
        await browser.switchTo().frame(element(by.css('iframe[src="innerFrame"]')).getWebElement());

        //Enter text in inner frame
        await element(by.name('email')).sendKeys("manmit.shelar@gmail.com");
        await browser.sleep(3000);

        //Switch back to parent frame
        await browser.switchToParentFrame();

        //Enter text in parent frame
        await element(by.name('fname')).sendKeys("Manmit");
        await browser.sleep(3000);

        //Switch back to parent frame
        browser.switchToParentFrame();
        let header = await element(by.tagName('h1')).getText();
        console.log(header)
    })

})