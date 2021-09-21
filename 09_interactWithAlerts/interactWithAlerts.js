import { browser, element, by, ExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";
import 'regenerator-runtime/runtime';

/*
    On completion of this exercise, you can learn the following concepts.
        switchTo()
        accept()
        dismiss()
        getText()
        sendKeys()
        Sweet Alert
*/

describe('Interacting with Alerts', function () {

    it('Simple Alert', async () => {
        //Open URL
        await browser.get('https://letcode.in/alert');
        await browser.manage().window().maximize();

        //Click alert
        await element(by.id('accept')).click();
        await browser.sleep(3000);

        //Accept alert (Click OK)
        await browser.switchTo().alert().accept();
    })

    it('Confirm Alert', async () => {
        //Open URL
        await browser.get('https://letcode.in/alert');
        await browser.manage().window().maximize();

        //Click alert
        await element(by.id('confirm')).click();
        await browser.sleep(3000);

        //Get text of the alert popup
        let txtPopup = (await browser.switchTo().alert()).getText();
        console.log(await txtPopup);

        //Dismiss allert (Click Cancel)
        await browser.switchTo().alert().dismiss();
    })

    it('Prompt Alert', async () => {
        //Open URL
        await browser.get('https://letcode.in/alert');
        await browser.manage().window().maximize();

        //Click alert
        await element(by.id('prompt')).click();
        await browser.sleep(3000);

        //Enter text on the alert popup
        let alert = await browser.switchTo().alert();
        await alert.sendKeys("Manmit Shelar")

        //Accept alert (Click OK)
        await alert.accept();
        await browser.sleep(3000);
    })

    it('Sweet Alert', async () => {
        //Open URL
        await browser.get('https://letcode.in/alert');
        await browser.manage().window().maximize();

        //Click alert
        await element(by.id('modern')).click();
        await browser.sleep(3000);

        //Close popup
        await element(by.css('button.modal-close')).click();
        await browser.sleep(3000);
    })
})