// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${preDecrement}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assigment operator
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operator
console.log(10 < 6); // less than
console.log(10 <=6); // less than or equal
console.log(10 > 6); // greather than
console.log(10 >=6); // greather than or equal

// 6. Logical operator: ||(or), &&(and), !(not)
const val1 = false;
const val2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${val1 || val2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${val1 && val2 && check()}`);
if(nullableObject != null){
    nullableObject.something;
}

// often used to compress long if-statement
//nullableObject && nullableObjct.something
function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('Oops!');
    }
    return true;
}

// !(not)
console.log(!val1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// == strict equality, no type conversion <추천>
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference (중요)
const yewon1 = { name: 'yewon' };
const yewon2 = { name: 'yewon' };
const yewon3 = yewon1;
console.log(yewon1 == yewon2); //false
console.log(yewon1 === yewon2); //false
console.log(yewon1 === yewon3); //true

// equality - puzzler
// 0, null, undefined, ''(empty string)은 모두 false로 간주 가능
console.log(0 == false); // true
console.log(0 === false); // false , 0은 boolean type이 아님
console.log('' == false); //true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Confitional operators: if
// if, else if, else
const name = 'yewon';
