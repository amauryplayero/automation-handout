const { By } = require('selenium-webdriver')

const crossNotif = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('El ayuwoki')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()

    const movie = await driver.findElement(By.xpath('//li'))
    // const crossed = await driver.findElement(By.xpath('//span[contains(@class,"checked")]'))
    const crossedMsg = await driver.findElement(By.xpath('//aside[contains(@id,"message")]'))
    const msg = crossedMsg.isDisplayed()
    expect(msg).toBeTruthy()


}

module.exports = {
    crossNotif
}