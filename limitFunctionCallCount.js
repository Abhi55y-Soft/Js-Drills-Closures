function limitFunctionCallCount(cb, n){
    let count = 0;
    return function invoke(){
        if (count < n){        // checking for function calls are in limit or not
            cb();
            count += 1;
        }
    }
}
module.exports.limitFunctionCallCount = limitFunctionCallCount;