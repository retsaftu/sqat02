const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

let avia = 'https://www.aviasales.kz/?device=c.&gclid=CjwKCAjwyaWZBhBGEiwACslQo-3Brzlb83CqCi1vpDVdjECiugHinPGqmpjaOvNPXpofeK-0LsDtvRoCM4YQAvD_BwE&geo=9063099.1009806&network=g&params=NYC1&placement=&position=&term_match_type=e&utm_adgroup_id=114796430770&utm_campaign=kz_almaty_desktop_search_brand&utm_campaign_id=12578799523&utm_content_id=586709177225&utm_medium=cpc&utm_source=ga&utm_term=aviasales&utm_term_id=kwd-42393665022'
let demo99 = `https://demo.guru99.com/test/newtours/`


let registerXpath = `/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/a`
let usernameXpath = `//*[@id="email"]`;
let passwordXpath = `/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[14]/td[2]/input`
let confPasswordXpath = `/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[15]/td[2]/input`
let sumbitRegisterXpath = `/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[17]/td/input`
let flightsXpath = `/html/body/div[2]/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/a`
let continueXpath = `/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[14]/td/input`

let user = {
    name: 'timur',
    password: '12345'
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
        await driver.get(demo99)
        await driver.sleep(3000)

         await driver.findElement(By.xpath(registerXpath)).click()
        driver.findElement(By.xpath(usernameXpath)).sendKeys(user.name);
        await driver.findElement(By.xpath(passwordXpath)).click()
        await driver.findElement(By.xpath(passwordXpath)).sendKeys(user.password);
        await driver.findElement(By.xpath(confPasswordXpath)).sendKeys(user.password);
        await driver.findElement(By.xpath(sumbitRegisterXpath)).click();
        await driver.findElement(By.xpath(flightsXpath)).click()
        await driver.findElement(By.xpath(continueXpath)).click()
        await driver.sleep(5000)
               await driver.quit()
    } catch (error) {
        await driver.quit()

        console.log(`error`, error);

    }

}

start()