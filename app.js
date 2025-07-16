const { add, divide } = require('./utils/math');
const { multiply } = require('./utils/logger');

console.log("About to call a math function")
console.log('Sum:', add(2, 3));

multiply(4,5)
divide(8,4)