import { expect } from "@playwright/test";

export class AssertUtils
{
    static assertTrue(actual:string,expected:string):void
    {
        if(actual == expected)
        {
            console.log(actual + "is matched with " +expected);
        }
        else
        {
            console.log(actual + "is not matched with" +expected);
        }

    }

    static assertTrue1(value : boolean):void
    {
        expect(value).toBe(true);
    }


}