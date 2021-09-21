import { browser, element, by, ExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";
import 'regenerator-runtime/runtime';

/*
    On completion of this exercise, you can learn the following concepts.
        1. sendKeys()
        2. Keyboard TAB
        3. getAttribute()
        4. clear()
        5. isEnabled()
        6. getText()
*/

describe('Interacting with Input Fields', function () {

    it('Enter text in a textbox', () => {
        //Open URL
        browser.get('https://letcode.in/edit');
        browser.manage().window().maximize();

        //Input text
        element(by.id('fullName')).sendKeys("Manmit Shelar");
        browser.sleep(3000)
    })

    it('Keyboard operation', () => {
        //Open URL
        browser.get('https://letcode.in/edit');
        browser.manage().window().maximize();

        //Keboard TAB operation
        element(by.id('join')).sendKeys(" person", protractor.Key.TAB);
        browser.sleep(3000)
    })

    it('Get value of an attribute', async () => {
        //Open URL
        browser.get('https://letcode.in/edit');
        browser.manage().window().maximize();

        //Get value of an attribute
        let txtValue = await element(by.id('getMe')).getAttribute("value");
        console.log(txtValue);
    })

    it('Clear text from a textbox', () => {
        //Open URL
        browser.get('https://letcode.in/edit');
        browser.manage().window().maximize();

        //Clear text
        element(by.id('clearMe')).clear()
        browser.sleep(3000)
    })

    it('Confirm textbox is diabled', async () => {
        //Open URL
        browser.get('https://letcode.in/edit');
        browser.manage().window().maximize();

        //Clear text
        let status = await element(by.id('noEdit')).isEnabled()
        expect(status).toBe(false)
        console.log(status);
    })

    it('Get text from the textbox', async () => {
        //Open URL
        browser.get('https://letcode.in/edit');
        browser.manage().window().maximize();

        //Clear text
        element(by.id('fullName')).sendKeys("Manmit Shelar");
        let txtContent = await element(by.id('fullName')).getText()
        console.log(txtContent);
    })
})