const myInformation = require('./information.js');
var cowsay = require('cowsay');
console.log(
  cowsay.say({
    text: myInformation.name,
  })
);
