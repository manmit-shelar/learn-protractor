import { browser, element, by, ExpectedConditions } from 'protractor';
import { protractor } from "protractor/built/ptor";
import 'regenerator-runtime/runtime';

/*
    On completion of this exercise, you can learn the following concepts.
        Window Handling concept
        close()
        quit()
        getTitle()
        List
*/

describe('Interacting with Tabs - ', function () {

    it('Switch to new window', async () => {
        //Open URL
        await browser.get('https://letcode.in/windows');
        await browser.manage().window().maximize();

        //Get parent window handle
        let parent = await browser.getWindowHandle();
        console.log("Parent window title = " + await browser.getTitle());

        //Open new tab
        await element(by.id('home')).click();

        //Get handle of all the tabs/windows
        let wins = await browser.getAllWindowHandles();
        console.log("Window ids of all the windows = " + wins);
        console.log("Total number of opened windows = " + wins.length);

        //Switch to desired window/tab
        await browser.switchTo().window(wins[1]);
        console.log("Child window title = " + await browser.getTitle());
        await browser.sleep(3000);
    })

    it('Switch back to parent window', async () => {
        //Open URL
        await browser.get('https://letcode.in/windows');
        await browser.manage().window().maximize();

        //Get parent window handle
        let parent = await browser.getWindowHandle();
        console.log("Parent window title = " + await browser.getTitle());

        //Open new tab
        await element(by.id('multi')).click();

        //Get handle of all the tabs/windows
        let wins = await browser.getAllWindowHandles();
        console.log("Window ids of all the windows = " + wins);
        console.log("Total number of opened windows = " + wins.length);

        //Switch to desired window/tab
        await browser.switchTo().window(wins[1]);
        console.log("Child window title = " + await browser.getTitle());
        await browser.sleep(3000);

        //Close child window 1
        await browser.close();

        //Switch back to parent window
        await browser.switchTo().window(parent);
        console.log("Parent window title = " + await browser.getTitle());
        await browser.sleep(3000);
    })

})