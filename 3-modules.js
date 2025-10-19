const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data);
// console.log(sayHi);
require('./7-mind-grenade');
sayHi(names.john);
sayHi('susan');
sayHi(names.peter);
sayHi('peter');

