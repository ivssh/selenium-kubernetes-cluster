let webdriver = require('selenium-webdriver');

const capabilities = {
  'browserName' : 'chrome'
}

const driver = new webdriver.Builder().
  usingServer('http://52.224.20.194:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.patientconnect365.com').then(function(){
  driver.getTitle().then(function(title) {
    console.log(title);
    driver.quit();
  });
});