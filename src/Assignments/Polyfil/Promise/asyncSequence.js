
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


async function executeTasksInSync(taskList, callback) {
    let results = [];
    let errors = [];
    for (let i = 0; i < taskList.length; i++) {
        let task = taskList[i]
        try {
            let res = await task();
            results.push(res);
            console.log('#### ' + res + ' ####')
        } catch (err) {
            errors.push(err);
            console.log('#### ' + err + ' ####')
        }

    }
    callback(results, errors);
}



executeTasksInSync([task1, task2, task3, task4], (results, errors) => {
    console.log(results)
    console.log(errors)
})