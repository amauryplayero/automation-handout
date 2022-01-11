const { TestScheduler } = require('@jest/core')
const { By, Builder, Capabilities } = require('selenium-webdriver')
require('chromedriver')
const {crossOffMovie} = require("./crossingOff")
const {crossNotif} = require("./watchNotif")
const {deleteNotif} = require("./deleteMovie")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async()=> {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async()=> {
    await driver.quit()
})

// test('crossOffMovie works', async ()=> {
//     await crossOffMovie(driver);
//     await driver.sleep(5000);
// });

// test('notification for crossing works', async ()=> {
//     await crossNotif(driver)
//     await driver.sleep(5000)
// })

test('notification for crossing works', async ()=> {
    await deleteNotif(driver)
    await driver.sleep(5000)
})


// two different types of notifications, the crossing off, 

