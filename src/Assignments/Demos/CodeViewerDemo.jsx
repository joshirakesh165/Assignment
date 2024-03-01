import React from 'react'
import CodeViewer from '../CodeViewer/CodeViewer'

let code = `const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("result 1")
    }, 3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("result 2")
    }, 1000)
})

const p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("result 3")
    }, 0)
})

const p4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("result 4")
    }, 5000)
})

/* 

cALL will accpet an array of 
promises and return array of response if all promises will resolve  
comment 

*/
Promise.cAll = function (promiseList) {
    let results = [];
    let errors = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseList.length; i++) {
            promiseList[i].then(response => {
                results.push(response);
                if (results.length == promiseList.length) {
                    resolve(results);
                }
            }).catch(error => {
                errors.push(error);
                reject(error);
            })
            if (errors.length > 0) break;
        }
    });
}

Promise.cAll([p1, p2, p3, p4])
    .then(response => console.log('res ', response))
    .catch(e => console.log(e));

`;

const CodeViewerDemo = () => {
    return (
        <div>
            <CodeViewer codeInStringForm={code} />
        </div>
    )
}

export default CodeViewerDemo
