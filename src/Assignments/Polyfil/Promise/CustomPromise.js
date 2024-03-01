function CustomPromise(executor) {
    let successFns = [];
    let errorFns = [];
    let state = 'PENDING';
    let pValue;

    function resolve(value) {
        successFns.forEach(succ => succ(value));
        pValue = value;
        state = 'FULLFILLED'
    }

    function reject(error) {
        errorFns.forEach(err => err(error))
        pValue = err;
        state = 'REJECTED'
    }

    executor(resolve, reject);
    return {
        then: (thenFn) => {
            state == 'PENDING' ?  successFns.push(thenFn) : thenFn(pValue);
            // can return new CustomPromise form here and mentained new variable to store next prmose chain
        },
        catch: (catchFn) => {
            state == 'PENDING' ? errorFns.push(catchFn) :catchFn(pValue)
        }
    }

}

let cPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("abc")
    }, 5000)
})

let f  = cPromise.then((res) => {
    console.log('cp',res) // abc
})

export default CustomPromise;
