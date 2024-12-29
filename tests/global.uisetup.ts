//import {test} from "@playwright/test";
import Login from "../src/ui/pages/Login";
import json from "../src/ui/testdata/testdata.json"
import { test } from "../src/ui/fixture/beforeeach";
import ENV from "../environment/env";

test('Login', async ({ beforeeachtest, page, login }) => {
    console.log(ENV.FLAG)
    await test.step('Login to the Application', async() => {
        await login.login(ENV.USERNAME, ENV.PASSWORD)
    })

})