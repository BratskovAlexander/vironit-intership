const chalk = require("chalk");
const text = require("./data");
const path = require("path");
const date = new Date();
const currentDateInMilliseconds = Date.parse(date);

console.log(chalk.red("Name file: "), chalk.white(path.basename(__filename)), "\n", chalk.red("path to file: "),chalk.white( __filename), "\n", chalk.red("current date in milliseconds: "), chalk.white(currentDateInMilliseconds ));
