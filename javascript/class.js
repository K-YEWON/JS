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
class Experiment {
    publicFiele = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFiele);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

static printPublisher() {
    console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, heignt, color) {
        this.width = width;
        this.heignt = heignt;
        this.color = color;
    }

    draw() {
        console.log(`drwing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.heignt;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // 오버라이딩(Overriding) : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의해서 사용
    draw() {
        // super : 상위 클래스가 가지고 있는 메소드 호출
        super.draw()
        console.log('▲');
    }
    getArea() {
        return (this.width * this.heignt) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object) // T