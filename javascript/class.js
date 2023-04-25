'use strict';
// Object-oriendted programming
// class : templet
// obejct : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance


// 1. Class declarations
class Person {
    //constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`); // this. 생성된 Obejct에 접근
    }
}

//Object 생성
const yewon = new Person('yewon', 20); // new 생성자 : 새로운 Oject를 생성할 때 사용하는 키워드
console.log(yewon.name);
console.log(yewon.age);
yewon.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // 값 리턴
        return this._age;
    }

    set age(value) { // 값 설정 : value 필요
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Stive', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields