const notes = require('./notes')

const chalk = require('chalk')
const { green } = require('chalk')

const getNotes = notes()

console.log(chalk.green('Success!'))
console.log(chalk.underline.red.inverse.bold('Fail!'))

console.log(process.argv[2])