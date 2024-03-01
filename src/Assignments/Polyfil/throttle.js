
function throttler(callback, time) {
    let flag = true;
    if (flag) {
        callback();
        flag = false;
        setTimeout(() => {
            flag = true;
        }, time)
    }
}