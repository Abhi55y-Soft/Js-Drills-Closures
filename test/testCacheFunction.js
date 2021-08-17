const {cacheFunction} = require('../cacheFunction');
 
const cb = (num1, num2) => {return num1 * num2}

const result = cacheFunction(cb);
result(1, 5, 3);  // 1st parameter is unique key for the object at which data will store  
result(2, 3, 3);  // 2nd parameter is num1 for calculation operation in 'cb'
result(3, 2, 3);  // 3rd parameter is num2 for calculation operation in 'cb'


result(1);  // Just passing key to retrive the data stored on this key            
result(5);  // if return 'NaN' then this key is not present in object