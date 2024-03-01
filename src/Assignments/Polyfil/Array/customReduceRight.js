Array.prototype.cReduceRight = function (fn, iValue) {
    let arrContext = this;
    let result = iValue != undefined ? iValue : 0;
    let startIndex = iValue != undefined ? arrContext.length -1: arrContext.length -2;
    for (let i = startIndex; i >= 0; i--) {
        result = fn(result, arrContext[i]);
    }
    return result;
}

let arrNew  = [[1,2,3],[4,5,6],[7,8,9]];
const r  = arrNew.cReduceRight((resultArray,curr) => {
    curr.forEach(e =>  resultArray.push(e));
    return resultArray;
},[]);
console.log(r) 