Array.prototype.cReduce = function (fn, iValue) {
    let arrContext = this;
    let result = iValue != undefined ? iValue : 0;
    let startIndex = iValue != undefined ? 0 : 1;
    for (let i = startIndex; i < arrContext.length; i++) {
        result = fn(result, arrContext[i]);
    }
    return result;
}

let arrObj = [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 40 }]
const sum2 = arrObj.cReduce((sum, curr) => {
    return sum + curr.age;
},0);
console.log(sum2);


let arrNew  = [[1,2,3],[4,5,6],[7,8,9]];
const r  = arrNew.reduce((resultArray,curr) => {
    curr.forEach(e =>  resultArray.push(e));
    return resultArray;
},[]);
console.log(r) 