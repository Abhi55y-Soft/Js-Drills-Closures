const {limitFunctionCallCount} = require('../limitFunctionCallCount');
let n = 2;     //set limit
const cb = () => {console.log("I'm Closure");}
const result = limitFunctionCallCount(cb, n);

result();       // calling functiin more than the limit       
result();
result();