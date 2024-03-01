import React from 'react'
import Accordian from '../Accordian/Accordian';
import CodeViewer from '../CodeViewer/CodeViewer';

const ArrayPolyfill = () => {

  const mapString = `let arr = [1, 2, 3, 4, 5, 6, 7];

  Array.prototype.cMap = function (fn) {
      let arrContext = this;
      for (let i = 0; i < arrContext.length; i++) {
          arrContext[i] = fn(arrContext[i]);
      }
      return arrContext;
  }`;

  const reduceString = `Array.prototype.cReduce = function (fn, iValue) {
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
console.log(r) `;


  const composeString = `function add2(num) {
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

console.log('res : ' ,compose(multiplyBy100,squre,double,add2,2));`


const pipeString = `function add2(num) {
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

function pipe () {
  let functCalls = [...arguments].slice(0,arguments.length -1);
  let data = arguments[arguments.length -1];
  let result = functCalls.reduce((res,functionCall)=>{
      return functionCall(res);
  },data);
  return result;
}

console.log('res :' ,pipe(multiplyBy100,squre,double,add2,2));`
  return (
    <div style={{padding:'20px',marginLeft: '20px'}}>
      <div>
        <Accordian title="Array Custom Map" >
          <CodeViewer codeInStringForm={mapString} />
        </Accordian>
      </div>
      <div>
        <Accordian title="Array Custom Reduce Map" >
          <CodeViewer codeInStringForm={reduceString} />
        </Accordian>
      </div>
      <div>
        <Accordian title="Pipe Function" >
          <CodeViewer codeInStringForm={pipeString} />
        </Accordian>
      </div>
      <div>
        <Accordian title="Compose Function" >
          <CodeViewer codeInStringForm={composeString} />
        </Accordian>
      </div>
    </div>
  )
}

export default ArrayPolyfill
