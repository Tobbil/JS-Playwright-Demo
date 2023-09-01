# JS-Playwright-WIP

This repository contains a Work-in-Progress (WIP) project for automated testing of demoblaze.com using Playwright and JavaScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Page Objects](#page-objects)
- [Test Data](#test-data)
- [Tests](#tests)

## Installation

To use this project, you need to have Node.js and npm (Node Package Manager) installed on your machine. Once you have them installed, follow the steps below:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project.
3. Run the following command to install the required dependencies:

```bash
npm install
```

## Usage

To run the automated tests, use the following command:

```bash
npm test
```

This command will execute all the tests located in the `tests` folder.

## Page Objects

The `page-objects` folder contains JavaScript files that represent the different pages or components of the application being tested. These files provide an abstraction layer for interacting with the UI elements on those pages. The following page objects are currently available:

- `CartPage.js`: Represents the cart page of the application.
- `ContactForm.js`: Represents the contact form page of the application.
- `MainPage.js`: Represents the main page of the application.
- `Navigation.js`: Represents the navigation bar of the application.

These page objects can be imported and used in the test files to interact with the corresponding page or component.

## Test Data

The `test-data` folder contains test data files that are used in the automated tests. Currently, there is one file available:

- `contactForm.js`: Contains test data for the contact form test.

You can modify these files to customize the test data used in the tests.

## Tests

The `tests` folder contains the automated test files. The following test files are available:

- `test-cart.spec.js`: Contains tests related to the cart functionality.
- `test-contact-form.spec.js`: Contains tests related to the contact form functionality.
- `test-ui-mainpage.spec.js`: Contains tests related to the main page UI elements.

Additionally, the `test-ui-mainpage.spec.js-snapshots` folder contains screenshots captured during the execution of the `test-ui-mainpage.spec.js` test file.
