const {counterFactory} = require('../counterFactory');

const result = counterFactory();

console.log(result.increment());
console.log(result.decrement());