import { CommonUtils } from "../util/CommonUtils.ts";

import  configData  from '../config/configData.json';

export class LoginPage
{
    private by_username = "input[name='txtUserName']";
    private by_password = "input[name='txtPassword']";
    private by_signIn = "input[name='Submit']";
    private by_welcomePage = "xpath=//li[text()='Welcome viswesh']";
    private by_logout = "xpath=//a[text()='Logout']";


    async login():Promise<void>    
    {
        //Enter the username

        await CommonUtils.enterValue(this.getUsername(),configData.username);

        await CommonUtils.enterValue(this.getPassword(),configData.password);

        await CommonUtils.clickElement(this.getSignIn());

    }


    getUsername(): string {

        return this.by_username;//"input[name='txtUserName']"

    }

    getPassword(): string {

        return this.by_password;//"input[name='txtPassword']"

    }

    getSignIn():string {

        return this.by_signIn; //"input[name='submit']"
    }

    getWelcomePage():string {

        return this.by_welcomePage; //"xpath=//li[text()='Welcome viswesh']"
    }



}