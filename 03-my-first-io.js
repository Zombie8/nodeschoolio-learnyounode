var fs = require('fs');

const filePath = process.argv[2]

var fileBuffer = fs.readFileSync(filePath, 'utf8')

//var fileString = fileBuffer.toString()

var stringArray = fileBuffer.split('\n')

console.log(stringArray.length - 1)