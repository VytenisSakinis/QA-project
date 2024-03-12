const { Builder, By, Key, until } = require("selenium-webdriver");
const env = process.env.NODE_ENV
const config = require(`../config.${env}.json`)

class CreateIssue {
  constructor(driver) {
    this.driver = driver;
  }

  async openIssue() {
    await this.driver.get(
      `${config.baseUrl}/client/index.php?folder=1`
    );
    await this.driver.findElement(By.linkText("Add Issue")).click();
  }

  async issueInfo(issueName) {
    await this.driver.findElement(By.id("field-issues-issueName")).click();
    await this.driver
      .findElement(By.id("field-issues-issueName"))
      .sendKeys(issueName);
    await this.driver.findElement(By.id("field-issues-okSubmit")).click();
  }

  async createIssue(issueName) {
    await this.openIssue();
    await this.issueInfo(issueName);
  }
}

module.exports = CreateIssue;
