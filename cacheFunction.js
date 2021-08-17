function cacheFunction(cb){
    let cache = {};
    return function invoke(key, num1, num2){
        if (key in cache){                    // if the key value pair exist
            return console.log(cache[key]);   // then return value
        }
        else{                                 
            cache[key] = cb(num1, num2);      // add key calculated value pair in object 'cache'
            return console.log(cache[key]);   // then return value
        }
    }
}
module.exports.cacheFunction = cacheFunction;