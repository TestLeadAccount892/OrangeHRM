import { Browser, chromium, firefox, FrameLocator, Locator, Page, webkit } from '@playwright/test';
import  configData  from '../config/configData.json';


export class CommonUtils
{

    static browser : Browser;
    static page : Page;

    static async startBrowser():Promise<void>
    {
        try
        {
            let browser : string = configData.browser  //firefox

            switch(browser)
            {
                case "firefox" :
                    this.browser = await firefox.launch({headless:false});
                    break;
                case "chromium" :
                    this.browser  = await chromium.launch({headless:false});
                    break;
                case "webkit" :
                    this.browser = await webkit.launch({headless:false});
                    break;
                default:
                    console.log("Invalid browser name . Launching chromium by default...");

            }

        }
        catch(error: any)
        {
            console.log("Failed to start browser: " +error.message);
        }

        this.page = await this.browser.newPage();

        await this.page.goto(configData.url); //http://127.0.0.1/orangehrm-2.5.0.2/login.php
    }


    public static async findelement(selector:string):Promise<Locator>
    {
        let element : Locator = null as any;
        try
        {
             element = this.page.locator(selector);

        }
        catch(error: any)
        {
            //AssertUtil.assertFalse(error.message);
        }

        return element;  //await page.locator("input[name='txtUserName']")


    }


    public static async enterValue(selector:string,value:string):Promise<void>
    {
        try
        {
            await (await this.findelement(selector)).fill(value);

        }
        catch(error: any)
        {
            //AssertUtil.assertFalse(error.message)

        }

    }

    
    public static async clickElement(selector:string):Promise<void>
    {
        try
        {
            await (await this.findelement(selector)).click();

        }
        catch(error: any)
        {
            //AssertUtil.assertFalse(error.message)
        }
    }

    public static async getElementText(selector:string):Promise<string>
    {
       let Text : string | null = "";
        try
        {
            let elementText : string | null = await (await this.findelement(selector)).textContent(); //welcome selenium

            if(elementText!=null)
            {
                 Text = elementText;  //welcome selenium
            }
        }
        catch(error : any)
        {
            //AssertUtil.assertFalse(error.message);
        }

        return Text; //welcome selenium

    }

    public static async moveToElement(selector:string):Promise<void>
    {

        try
        {
            await (await this.findelement(selector)).hover();

        }catch(error:any)
        {
            //AssertUtil.assertFalse(error.message);
        }

    }

    public static async switchToFrame(selector:string):Promise<FrameLocator>
    {
        let frame : FrameLocator = null as any;
        try
        {
            await this.page.waitForLoadState('load');
            frame = this.page.frameLocator(selector);

        }catch(error: any)
        {
            //AssertUtil.assertFalse(error.message);
        }

        return frame; //page.frameLocator(selector);

    }

    public static async getElementTextInFrame(pimFrame : FrameLocator,selector:string):Promise<string>    
    {
        let text : string = "";
        try
        {
            let frameText : string | null = await pimFrame.locator(selector).textContent(); //PIM : Add Employee

            if(frameText!=null)
            {
                 text = frameText;
            }

        }catch(error: any)
        {
            //AssertUtil.assertFalse(error.message);
        }

        return text; //PIM : Add Employee

    }

    public static async enterValueInFrame(pimFrame : FrameLocator,selector:string,value:string):Promise<void>
    {
        try
        {
            await pimFrame.locator(selector).fill(value);

        }catch(error: any)
        {
            //AssertUtil.assertFalse(error.message);
        }

    }

    public static async clickElementInFrame(pimFrame : FrameLocator, selector : string):Promise<void>
    {
        try
        {
            await pimFrame.locator(selector).click();
        }
        catch(error: any)
        {
            //AssertUtil.assertFalse(error.message);
        }

    }

    public static async isElementChecked(pimFrame : FrameLocator, selector : string):Promise<boolean>
    {
        let boolean_Var : boolean = false;
        try
        {
            let element : Locator =  pimFrame.locator(selector);

            await element.click();

            boolean_Var = await element.isChecked(); //true

        }
        catch(error: any)
        {
            //AssertUtil.assertFalse(error.message);
        }

        return boolean_Var; //true if try block pass else false.

    }

    public static async selectDropdownValue(pimFrame : FrameLocator,selector : string, option : string):Promise<void>
        {
            try
            {
                await pimFrame.locator(selector).selectOption(option);

            }
            catch(error: any)
            {
                //AssertUtil.assertFalse(error.message);
            }

        }


}