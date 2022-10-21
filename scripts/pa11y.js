const pa11y = require('pa11y')
const fs = require('fs')
const path = require('path')
const appRoot = require('app-root-path')
const packageJson = require(appRoot + '/package.json')
const colors = require('colors/safe')
let data

try {
  data = packageJson.accessibility
} catch (err) {
  console.log('No a11y config found, please check the README file for help')
}

async function runPa11y(url) {
  try {
    const result = await pa11y(url)

    console.log(colors.yellow(`A11y summary for ${url}`))

    if (!result.issues.length) {
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
          `There ${
            result.issues.length > 1
              ? `are ${result.issues.length} issues`
              : 'is 1 issue'
          } with this page:`
        )
      )
    }

    result.issues.forEach(issue => {
      console.log(colors.red(`A11Y ERROR! ${issue.message}`))
      console.log(colors.brightCyan(`The offending code: ${issue.context}`))
      console.log(
        colors.brightMagenta(
          '          ================================================================          '
        )
      )
    })
  } catch (e) {
    console.error(colors.red(e.message))
  }
}

data?.forEach(x => runPa11y(x))
