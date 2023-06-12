// JSON
// JavaScript Object Notation

// 1. Object to JSON
// string(obj)
// 문자열 JSON으로 변환하기
let json = JSON.stringify(true);
console.log(json);

// 배열 JSON으로 변환하기
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// Object JSON으로 변환하기
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

//원하는 property만 추출
json = JSON.stringify(rabbit, ["name"]);
console.log(json);

// 콜백함수 이용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'yewon' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    //return value;
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj)
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
