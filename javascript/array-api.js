  // Q1. make a string out of an array (join(separator?: string): string;)
  // 배열의 문자열 합치기
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    const result2 = fruits.join(', and'); 
    console.log(result2);
  }
  
  // Q2. make an array out of a string (split(separator: string | RegExp, limit?: number): string[];)
  // 문자열 배열로 변환
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2);
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1] (reverse : 원본 배열 값 삭제됨)
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements (slice(start?: number, end?: number): T[];)
  // splice : 원본 배열 값을 삭제하기 때문에 헷갈림 주의
  // slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환, 원본 배열은 바뀌지 않음.
  // slice 는 end 인덱스를 제외하고 추출함 주의
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    const result2 = array.slice(2, -1);
    console.log(result);
    console.log(result2);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result =  students.find(function(student, index) {
      return student.score === 90;
    }); 
    console.log(result);
  }
  // Arrow function 변환
  {
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
  }
  
  console.clear();
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => {
      console.log('------');
      console.log(prev);
      console.log(curr);
      return prev + curr.score;
    }, 0);
    console.log(result);
  }

  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map(student => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
  }