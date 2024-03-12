const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const LoginPage = require("../page/login");
const CreateIssue = require("../page/createIssue")
const DeleteIssue = require("../page/deleteIssue")
const env = process.env.NODE_ENV
require("dotenv").config({path: `./ENV/${env}.env`})

console.log("Username" + " " + process.env.SITEUSERNAME);

describe("2 should be able to create issue", function () {
  this.timeout(30000);
  let driver;
  let vars;
  let loginPage;
  let createIssue;
  let deleteIssue;
  const issueName = ["Totally Works", "Totally doesnt Work"]
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
    loginPage = new LoginPage(driver);
    createIssue = new CreateIssue(driver);
    deleteIssue = new DeleteIssue(driver);
    const username = process.env.SITEUSERNAME;
    const password = process.env.PASSWORD;
    await loginPage.login(username, password);
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("1 should be able to log in", async function () {});
  it("2 should be able to create issue", async function () {
    for (let i = 0; i < 2; i++) {
      await createIssue.createIssue(issueName[i])
    }
  });
  it('3 should be able to delete issue', async function() {
    for (let i = 0; i < 2; i++) {
    await deleteIssue.deleteIssue(issueName[i], issueName[i])
  }
  })
});
