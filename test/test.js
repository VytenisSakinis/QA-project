const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const LoginPage = require("../page/login")

describe("2 should be able to create issue", function () {
  this.timeout(30000);
  let driver;
  let vars;
  let loginPage
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
    loginPage = new LoginPage(driver)
    loginPage.open()
    await loginPage.enterUserName("vytenis.sakinis@gmail.com");
    await loginPage.enterPassword("vytenis.sakinis@gmail.com");
    await loginPage.pressLogin();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("1 should be able to log in", async function () {
    await driver.get(
      "https://testingmarathon.com/register/client/index.php?folder=1"
    );
  });
  // it("2 should be able to create issue", async function () {
  //   await driver.get(
  //     "https://testingmarathon.com/register/client/index.php?folder=1"
  //   );
  //   await driver.findElement(By.linkText("Add Issue")).click();
  //   await driver.findElement(By.id("field-issues-issueName")).click();
  //   await driver
  //     .findElement(By.id("field-issues-issueName"))
  //     .sendKeys("asdasdasdasd");
  //   await driver.findElement(By.id("field-issues-okSubmit")).click();
  // });
});
