function counterFactory(){
    const object = {
        counter : 0,
        increment(){
            this.counter += 1;
            return this.counter;
        },
        decrement(){
            this.counter -= 1;
            return this.counter;
        }
    }
    return object;
}
module.exports.counterFactory = counterFactory;