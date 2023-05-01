'use strict';
// objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all object in JavaScript are instance of Object
// object = { key : value };


// 1. Literals and properties
/* const name = 'yewon';
const age = '7'
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}
const yewon = {name: 'yewon', age: '7'}; */

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const yewon = {name: 'yewon', age: '7'};
print(yewon);

yewon.hasJob = true;
console.log(yewon.hasJob);

delete yewon.hasJob;
console.log(yewon.hasJob);

// 2. Computed properties
// key should be always string
console.log(yewon.name);
console.log(yewon['name']);
yewon['hasJob'] = true;
console.log(yewon.hasJob);

function printValue(obj, key) {
    //console.log(obj.key);
    console.log(obj[key]); // function printValue(ellie, `name`) 에서 두번째 매개변수 `name`는 코딩중이 아닌 런타임때에 첫번째 매개변수가 결정되고 나서야 값을 구할수 있다. 그러므로 obj.key가 아닌 obj[key]를 쓰는것이 알맞다.
}
printValue(yewon, 'name');
printValue(yewon, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('yewon', 7);
console.log(person4);
console.log(person4.age);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
  }
  
// 5. in operator: property existence check (key in obj)
console.log('name' in yewon);
console.log('age' in yewon);
console.log('random' in yewon);
console.log(yewon.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in yewon) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
/*for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = {name: 'yewon', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

/*const user4 = {};
Object.assign(user4, user);*/
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);