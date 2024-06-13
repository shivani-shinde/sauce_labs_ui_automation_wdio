# sauce_labs_ui_automation_wdio
This repository contains UI Automation test for sauce labs with WebdriverIO using Typescript.

## URL: 
https://www.saucedemo.com/

## Scenario: 
Verify end to end flow of user logging in, purchasing a product and checking out.

## About Test Framework
For the purpose of this demo, [WebdriverIO](https://webdriver.io/) test framework has been used with Typescript as language. The following directory structure is been followed:
 
    ./allure-results/
    ./test/
    ├── pageobjects/
    │      ├── page.ts
    │       └── sauce_labs/
    │           ├── cart.page.ts
    │           ├── checkout.page.ts
    │           ├── checkout_complete.page.ts
    │           ├── checkout_overview.page.ts
    │           ├── login.page.ts
    │           └── products_listing.page.ts
    └── specs/
        └── sauce_labs/
            └── checkout_e2e.spec.ts
    └── wdio.conf.ts


* pageobjects/ - Contains locators and methods implemented page wise using Page Object Model.
* page.ts/ -  Will contain all common methods or locators which are required and constant across the application. Like logo, website URL, navigation bar, etc.
* specs/ - Contains test suite and test cases.
* allure-results/ - Contains reports generated for each test suite and test case.
* wdio.conf.ts - Contains all configurations for WebdriverIO.


## How to Setup and Run test
### Setup:
```
Clone the repository.
cd sauce_labs_ui_automation_wdio
npm i

Java Version: 
(If java is not present, the test will still execute, only report cannot be generated.)
java version "1.8.0_391"
Java(TM) SE Runtime Environment (build 1.8.0_391-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.391-b13, mixed mode)
```

### Run test:
```
npm run test
```

### Generate Report:
```
npx allure serve allure-results

The report will be generated and opened in browser.
```
