const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

let url = `https://www.google.com/intl/ru/gmail/about/#inbox`

let signInHrefXpath = `/html/body/header/div/div/div/a[2]`
let usernameXpath = `//*[@id="identifierId"]`;
let continueXpath = `//*[@id="identifierNext"]/div/button`
let passwordXpath = `//*[@id="password"]/div[1]/div/div[1]/input`;
let finishXpath = `//*[@id="passwordNext"]/div/button`

let user = {
    email: '*****@gmail.com',
    password: '******'
}
async function start() {
    const options = new chrome.Options()

    options.addArguments('--disable-dev-shm-usage')
    options.addArguments('--no-sandbox')

    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build()

    try {
        await driver.get(url)
        await driver.sleep(3000)

        await driver.findElement(By.xpath(signInHrefXpath)).click()
        driver.findElement(By.xpath(usernameXpath)).sendKeys(user.email);
        await driver.findElement(By.xpath(continueXpath)).click()
        await driver.sleep(5000)

        await driver.findElement(By.xpath(passwordXpath)).sendKeys(user.password);
        await driver.findElement(By.xpath(finishXpath)).click();
        await driver.sleep(5000)
        await driver.quit()
    } catch (error) {
        await driver.quit()

        console.log(`error`, error);

    }

}

start()