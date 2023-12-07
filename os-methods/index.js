const os = require("os")

// provides the object with lots of data
// console.log(os)

// provides the system cpu bit
console.log("system bit:", os.arch())

console.log("system connected with:", os.networkInterfaces())

console.log(os.type())

console.log(os.machine())

console.log(os.version())

console.log(os.userInfo())