const {Builder, By, Key, util} = require("selenium-webdriver");
async function example(){

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://passionate.io/build-an-app/name")
    
    await driver.findElement(By.name("appName")).sendKeys("Sunny day", Key.RETURN);
    
}

example()
