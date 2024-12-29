import { expect } from "@playwright/test";
import { test } from "../src/ui/fixture/beforeeach";
import Launch from "../src/ui/pages/Launch";
import Login from "../src/ui/pages/Login";
import Homepage from "../src/ui/pages/Homepage";
import Signout from "../src/ui/pages/Signout";
import { testdataforlogin, testdataforlaunch } from "../src/ui/testdata/testdata";
import json from "../src/ui/testdata/testdata.json";

test('Homepage', async ({ beforeeachtest, page, homepage }) => {
  await test.step('Access the Homepage url', async () => {
    await homepage.homepage();
  })
})

test('Signout', async({beforeeachtest,signout})=>{
  await test.step('Click Logout Button', async () => {
    await signout.signout()
  })
})