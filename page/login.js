const { Builder, By, Key, until } = require("selenium-webdriver");
const env = process.env.NODE_ENV
const config = require(`../config.${env}.json`)

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get(config.baseUrl);
        await this.driver.manage().window().setRect({ width: 1920, height: 1080 });
    }

    async enterUserName(userName)
    {
        await this.driver.findElement(By.id("field-login-login")).click();
        await this.driver.findElement(By.id("field-login-login")).sendKeys(userName);
    }

    async enterPassword(password)
    {
        await this.driver.findElement(By.id("field-login-password")).click();
        await this.driver
            .findElement(By.id("field-login-password"))
            .sendKeys(password);
    }

    async pressLogin() {
        await this.driver.findElement(By.id("field-login-loginSubmit")).click();
    }

    async login(username, password)
    {
        await this.open();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.pressLogin();
    }
}

module.exports = LoginPage;