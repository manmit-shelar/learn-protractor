import { browser, element, by, ExpectedConditions, $ } from "protractor";
import { protractor } from "protractor/built/ptor";
import 'regenerator-runtime/runtime';
import { async } from "q";

/*
    On completion of this exercise, you can learn the following concepts.
        click()
        driver navigation commands
        getLocation()
        getCss()
        getSize()
        isEnabled()
*/

describe('Interacting with Buttons', function () {

    it('Click specific locator', () => {
        //Open URL
        browser.get('https://letcode.in/buttons');
        browser.manage().window().maximize();

        //Click button
        element(by.buttonText('Goto Home')).click();
        browser.sleep(3000)
    })

    it('Get position of the button', async () => {
        //Open URL
        browser.get('https://letcode.in/buttons');
        browser.manage().window().maximize();
        
        //$(#css) = element(by.id(''))
        let location = await $('#position').getLocation();
        console.log("Location of X coordinate = " + location.x)
        console.log("Location of Y coordinate = " + location.y)
    })

    it('Get button colour', async () => {
        //Open URL
        browser.get('https://letcode.in/buttons');
        browser.manage().window().maximize();
        
        //Get css value of an locator
        let btnColor = await element(by.css('#color')).getCssValue('background-color');
        console.log(btnColor);
    })

    it('Get hieght and width of the button', async () => {
        //Open URL
        browser.get('https://letcode.in/buttons');
        browser.manage().window().maximize();
        
        //Get size of an locator
        let btnSize = await element(by.id('property')).getSize()
        console.log("Hieght of the button = " + btnSize.height);
        console.log("Width of the button = " + btnSize.width);
    })

    it('Check if button is enabled or disabled', async () => {
        //Open URL
        browser.get('https://letcode.in/buttons');
        browser.manage().window().maximize();
        
        //Get status of an locator
        let btnPresent = await element(by.id('isDisabled')).isPresent();
        let btnEnabled = await element(by.id('isDisabled')).isEnabled();
        let btnIsSelected = await element(by.id('isDisabled')).isSelected();
        console.log("Button is displayed = " + btnPresent);
        console.log("Button is enabled = " + btnEnabled);
        console.log("Button is selected = " + btnIsSelected);
    })

})