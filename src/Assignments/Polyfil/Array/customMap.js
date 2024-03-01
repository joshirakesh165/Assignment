let arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.cMap = function (fn) {
    let arrContext = this;
    for (let i = 0; i < arrContext.length; i++) {
        arrContext[i] = fn(arrContext[i]);
    }
    return arrContext;
}