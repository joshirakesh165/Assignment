
const task1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 1')
        }, 3000)
    })
}
const task2 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Task 2')
        }, 100)
    })
}
const task3 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Task 3')
        }, 500)
    })
}
const task4 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 4')
        }, 0)
    })
}


async function executeTasksInParallel(taskList, callback) {
    let results = [];
    let errors = [];

    function executeCallbackOnceDone () {
        if(results.length + errors.length == taskList.length) {
            callback(results,errors);
        }
    }
    taskList.forEach((task) => {
        task().then(succes => {
            console.log("### " + succes + " ####");
            results.push(succes);
            executeCallbackOnceDone();
        },error => {
            console.log("### " + error + " ####");
            errors.push(error);
            executeCallbackOnceDone();
        })
    })
}



executeTasksInParallel([task1, task2, task3, task4], (results, errors) => {
    console.log(results)
    console.log(errors)
});