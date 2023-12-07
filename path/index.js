const path = require("path")

// console.log(path)
// returns the object

const current = path.join("/baseFolder", "/subfolder", "/user.txt")

// Get the base name of the file
const fileName = path.basename(current);

// Example usage of path.resolve
const absolutePath = path.resolve('/baseFolder', 'subfolder', 'user.txt');

// return th relative directory
console.log(current);

// returns the current working file
console.log(fileName);

// returns path with root file
console.log(absolutePath);