import { browser, element, by } from "protractor";
import 'regenerator-runtime/runtime';

/*
    On completion of this exercise, you can learn the following concepts.
        1. Handle promise with then function
        2. Handle promise with async and await
*/

describe('Promise handling -', function () {

    it('Handle promise with then function', function () {        

        //Open URL
        browser.get("http://juliemr.github.io/protractor-demo/");

        //Calculation
        element(by.model('first')).sendKeys("3");
        element(by.cssContainingText('option', '+')).click();
        element(by.model('second')).sendKeys("5");
        element(by.id('gobutton')).click();

        //Promise handled with then function
        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(additionTableValue){
            console.log("Table Value: "+additionTableValue);
        });

        //Assert Result
        expect(element(by.repeater('result in memory')).element(by.css('tr.ng-scope td:nth-child(3)')).getText()).toBe("8");
    })

    it('Handle promise with async and await', async () => {
        
        //Open URL
        browser.get("http://juliemr.github.io/protractor-demo/");

        //Promise handled with async and await
        console.log(await browser.getTitle());
    })
})