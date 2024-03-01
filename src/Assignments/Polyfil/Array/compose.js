function add2(num) {
    return num  + 2;
}

function double(num) {
    return num  * 2;
}

function squre(num) {
    return num  * num;
}

function multiplyBy100(num) {
    return num  * 100;
}

function compose () {
    let functCalls = [...arguments].slice(0,arguments.length -1);
    let data = arguments[arguments.length -1];
    let result = functCalls.reduceRight((res,functionCall)=>{
        return functionCall(res);
    },data);
    return result;
}

console.log('res : ' ,compose(multiplyBy100,squre,double,add2,2));