'use strict'
//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing 하나의 함수는 하나의 일만 하도록 구성
// naming: doSometing, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const yewon = { name : 'yewon'};
changeName(yewon);
console.log(yewon);

// 3. Default parameters (added in ES6)
/* function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
} */
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
//showMessage('Hi!', 'yewon');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i =0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable 전역 변수
function printMessage() {
    let message = 'hello';
    console.log(message); //local veriable 지역 변수
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); 밖에서 자식 요소 출력 안됨 (error)
    return undefined; //생략 가능
}
printMessage();
// console.log(message); 밖에서 지역 변수 출력 안됨 (error)

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);
console.log(`sum: ${result}`);

// 7.Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {
       return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by anotehr function

// 1. Function expression
// a function declaration (함수 선언식) can be called earlier than it is defined. (hoistied)
// a function expression (함수 표현식) is created when the execution reaches it.
const print = function () { // 이름 없는 함수 : anonymous function , 선언과 동시에 할당
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 기존에 사용한 방식
const simplePrint = function () {
    console.log('simplePrint!');
};

// Arrow function
// always anonymous function
const new_simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); // 함수 선언함과 동시에 바로 실행


// Fun quiz time ❤️
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

function calculate(command, a, b){
    if (a + b) {
        return a + b;
    } else if (a - b) {
        return a - b;
    } else if (a / b) {
        return a / b;
    } else if (a * b) {
        return a * b;
    } else (a % b) 
        return a % b;
}

console.log(calculate('a+b', 2, 3));

// ellie code
function calculate_ellie(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate_ellie('add', 2, 3));