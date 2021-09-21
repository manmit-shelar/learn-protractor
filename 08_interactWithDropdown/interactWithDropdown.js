import { browser, element, by, ExpectedConditions, $ } from "protractor";
import { protractor } from "protractor/built/ptor";
import 'regenerator-runtime/runtime';
import { async } from "q";

/*
    On completion of this exercise, you can learn the following concepts.
        selectByVisibleText()
        isMultiple()
        How to select mutiple values
        selectByIndex()
        getOptions()
        selectByValue()
        getFirstSelectedOption()
*/

describe('Interacting with Dropdowns', function () {

    it('Select dropdown value with visible text', () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Select with cssContainingText on Option value
        element(by.cssContainingText('option', 'Apple')).click();
        browser.sleep(3000)
    })

    it('Check if drowndown is of type multiple value dropdown', async () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Check dowpdown type
        let selType = await element(by.id('superheros')).getAttribute('multiple');
        console.log("Is dropdown a multiple value dropdown = " + selType);
    })

    it('Select multiple values of a dropdown', async () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Select multiple values of fropdown using for loop
        var data = 'Aquaman,Batman';
        let resultSelection = data.split(",");
        var i;
        for (i = 0; i < resultSelection.length; i++) {
            element(by.cssContainingText('option', resultSelection[i])).click();
        }
        browser.sleep(3000);
    })

    it('Select dropdown value by index', async () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Select value by index using all
        element.all(by.tagName('#lang option')).get(2).click();
        browser.sleep(3000);
    })

    it('Get all the values of a dropdown', async () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Get all values of a dropdown using all and tagName
        var allOption = await element(by.id('lang')).all(by.tagName('option')).getAttribute('value');
        //One more way => var allOption = await element.all(by.id('lang')).first().getText(); 
        console.log("Dropdown values = " + allOption);
    })

    it('Select dropdown by value', async () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Select dropdown by value
        element(by.css("option[value='India']")).click();
        browser.sleep(3000);
    })

    it('Get first selected option', async () => {
        //Open URL
        browser.get('https://letcode.in/dropdowns');
        browser.manage().window().maximize();

        //Select value by index using all
        var firstOption = await element.all(by.css('#country option')).first().getAttribute('value');
        console.log("First value of the Dropdown = " + firstOption);
    })
})