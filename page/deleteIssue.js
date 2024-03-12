const { Builder, By, Key, until } = require("selenium-webdriver");
const env = process.env.NODE_ENV
const config = require(`../config.${env}.json`)

class DeleteIssue {
  constructor(driver) {
    this.driver = driver;
  }

  async openIssuePage() {
    await this.driver.get(
      "https://testingmarathon.com/register/client/index.php?folder=1"
    );
  }

  async searchIssue(issueSearch) {
    await this.driver.findElement(By.id("field-search-searchBox")).click();
    await this.driver
      .findElement(By.id("field-search-searchBox"))
      .sendKeys(issueSearch);
    await this.driver.findElement(By.id("field-search-searchSubmit")).click();
  }

  async deleteSelectedIssue(IssueName) {
    await this.driver.findElement(By.linkText(IssueName)).click();
    await this.driver.findElement(By.linkText("Delete Issue")).click();
    await this.driver.findElement(By.id("field-issues-okSubmit")).click();
  }

  async deleteIssue(issueSearch, issueName)
  {
    await this.openIssuePage();
    await this.searchIssue(issueSearch);
    await this.deleteSelectedIssue(issueName);
  }
}

module.exports = DeleteIssue;