const pa11y = require('pa11y')
const fs = require('fs')
const path = require('path')
const appRoot = require('app-root-path')
const packageJson = require(appRoot + '/package.json')
const colors = require('colors/safe')
let data
let hideEls
let defaultHideEls

// Checks if a config file exists, and if it does, add the path to it to config variable.
try {
  data = packageJson.accessibility
} catch (err) {
  console.log('No a11y config found, please check the README file for help')
}

async function runPa11y(url) {
  try {
    const result = await pa11y(url)
    // print out message to user with celebratory message
    console.log(colors.yellow('A11y summary for ' + url))
    if (result.issues.length == 0) {
      console.log(
        colors.green(`
====================================================================================
====================================================================================
	CONGRATULATIONS, YOUR SITE MEETS THE WCAG AA STANDARD!
====================================================================================
====================================================================================
			`)
      )
    } else {
      console.log(
        colors.yellow(
          'There are ' + result.issues.length + ' issues with this page:'
        )
      )
    }

    // Output the raw result object
    for (let i = 0; i < result.issues.length; i++) {
      console.log(colors.red('A11Y ERROR! ' + result.issues[i].message))
      console.log(
        colors.brightCyan('The offending code: ' + result.issues[i].context)
      )
      console.log('===========================================================')
    }
  } catch (error) {
    // Output an error if it occurred
    console.error(colors.red(error.message))
  }
}

// RUN THROUGH TEAM'S PROJECTS

if (data) {
  for (let i = 0; i < data.length; i++) {
    runPa11y(data[i])
  }
}
