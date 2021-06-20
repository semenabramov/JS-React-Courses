function sum(){
    let res = 0;
    Array.prototype.forEach.call(arguments, (num) => {
        res += num;
    })
    return res;
}

function sub(){
    let res = 0;
    Array.prototype.forEach.call(arguments, (num) => {
        res -= num;
    })
    return res;
}

function mul(){
    let res = 1;
    Array.prototype.forEach.call(arguments, (num) => {
        res *= num;
    })
    return res;
}

function div(){
    let res = 1;
    Array.prototype.forEach.call(arguments, (num) => {
        res /= num;
    })
    return res;
}


function curry(fn) {
  function innerFn(...args) {
    return function actualInnerFn(a) {
      if(!a) {
        return fn(...args);
      }
     return innerFn(...args, a);
    }
  }
  return innerFn()
}

const SubInf = curry(sub)
const SumInf = curry(sum);
const MulInf = curry(mul)
const DivInf = curry(div);

//let num = SubInf(10);
//console.log(num(-5)());

console.log(SumInf(1)(3)(2)(4)()); 
console.log(SubInf(1)(3)(2)(4)()); 
console.log(MulInf(1)(3)(2)(4)()); 
console.log(DivInf(1)(3)(2)(4)()); 
