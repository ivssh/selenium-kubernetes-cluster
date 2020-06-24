from selenium import webdriver

desiredCapabilities={
"browserName":"chrome"
}

driver = webdriver.Remote(command_executor='http://52.146.51.7:4444/wd/hub',desired_capabilities = desiredCapabilities)
driver.get("https://www.patientconnect365.com/")
print(driver.title)
driver.quit()
