const { By } = require('selenium-webdriver')

const deleteNotif = async (driver)=>{
    await driver.findElement(By.xpath('//input')).sendKeys('El Ayuwoki')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span/button')).click()

    // const movie = await driver.findElement(By.xpath('//li'))
    const deleteBtnPressed = await driver.findElement(By.xpath('//aside[contains(@id,"message")]'))

    const message = deleteBtnPressed.isDisplayed()
    expect(message).toBeTruthy()


}

module.exports = {
    deleteNotif
}