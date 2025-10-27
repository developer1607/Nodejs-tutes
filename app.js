// NPM Global command, comes with node
// NPM --version

// Local dependency - use it only in this particular products
// npm i <packageName>

// Global dependency - use it in any projects
// npm install -g <packageName>
// sudo install -g <packageName>

const { log } = require('console');
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
log('Hello Run');
