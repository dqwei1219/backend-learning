console.log("this is my node js app !")

// every file is a module
// require takes the exports from other file
const names = require('./moduleTut')
const sayHii = require('./func') // must be assigned name to use the function
require('./mindGrenade') // this will run the mindGrenade file

sayHii(names.name)
sayHii(names.name1)