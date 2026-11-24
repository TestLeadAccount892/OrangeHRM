import { test, FrameLocator } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { PIMPage } from "../pages/PIMPage.ts";
import { AssertUtils } from "../util/AssertUtils.ts";
import { CommonUtils } from "../util/CommonUtils.ts";
import  configData  from '../config/configData.json';


 let loginPage : LoginPage = new LoginPage();
 let pimpage : PIMPage = new PIMPage();

test('AddEmpThenVerify', async () => 
{
    CommonUtils.page.setDefaultTimeout(60000);
    loginPage.login();

    AssertUtils.assertTrue(await CommonUtils.getElementText(loginPage.getWelcomePage()),"Welcome viswesh");

    await CommonUtils.moveToElement(pimpage.getpim());

    await CommonUtils.clickElement(pimpage.getAddEmp());

    let pimFrame : FrameLocator = await CommonUtils.switchToFrame(pimpage.getFrame()); //await page.frameLocator(selector);

    AssertUtils.assertTrue(await CommonUtils.getElementTextInFrame(pimFrame,pimpage.getPimAddEmp()),"PIM : Add Employee");

    await CommonUtils.enterValueInFrame(pimFrame,pimpage.getFirstName(),configData.firstname); //Visu

    await CommonUtils.enterValueInFrame(pimFrame,pimpage.getLastName(),configData.lastname); //Pallasoft

    await CommonUtils.clickElementInFrame(pimFrame,pimpage.getSave());

    await CommonUtils.clickElementInFrame(pimFrame,pimpage.getEdit());

    AssertUtils.assertTrue1(await CommonUtils.isElementChecked(pimFrame,pimpage.getChkSmoker()));

    await CommonUtils.clickElementInFrame(pimFrame,pimpage.getSave());

    await CommonUtils.clickElementInFrame(pimFrame,pimpage.getBackButton());

    await CommonUtils.selectDropdownValue(pimFrame,pimpage.getSearchByDropdown(),configData.dropdownoption);

    await CommonUtils.enterValueInFrame(pimFrame,pimpage.getSearchFor(),configData.SearchFor); //Visu

    await CommonUtils.clickElementInFrame(pimFrame,pimpage.getSearchButton());

    AssertUtils.assertTrue(await CommonUtils.getElementTextInFrame(pimFrame,pimpage.getEmployeeName()),"visu pallasoft");

});















