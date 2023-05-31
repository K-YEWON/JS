'use strict'

// Array🎉

// 1. Decleration 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index) {
    console.log(fruit, index);
});

//arrow function : anonymous function에서 사용 가능
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// 😊 push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// 😊 pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// 🙁 unshift: add an item to the benigging
fruits.unshift('🫐', '🥝');
console.log(fruits);

// 🙁 shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍅', '🍇', '🍍');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍊', '🍒');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); // concat : 문자열 붙이기
console.log(newFruits);

console.clear();
// 5. Searching
// find the index
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🥥')); // -1

// include
console.log(fruits.includes('🍎')); // T
console.log(fruits.includes('🥥')); // F

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 요소가 중복 된 경우 제일 첫 번째 요소 Index 출력
console.log(fruits.lastIndexOf('🍎')); // 요소가 중복 된 경우 제일 마지막 요소 Index 출력