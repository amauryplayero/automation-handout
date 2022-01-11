const { By } = require('selenium-webdriver')

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('El ayuwoki')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()
    
    const movie = await driver.findElement(By.xpath('//li'))
    // const displayed = movie.isDisplayed()
    const crossed = await driver.findElement(By.xpath('//span[contains(@class,"checked")]'))
    expect(crossed).toBeTruthy()
}

module.exports = {
    crossOffMovie
}
