const mynums = [1,2,3,4,5,6,7,8,9];


// useing filter 
// const newNums = mynums.filter(
//     (n)=> n>5
// )

//   Or 

// const newNums = mynums.filter(
//     (n)=>{
//         return n<5;
//     }
// )


// useing for each 
// const newNums = [];
// mynums.forEach(
//     (n)=>{
//         if (n>5) {
//             newNums.push(n);
//         }
//     }
// )

// console.log(newNums);


// *****************filter questions *************

// Q1. Given an array of numbers, use the filter method to create a new array containing only the even numbers.
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const even = numbers.filter(
    (n)=> n%2 == 0
 )
//  console.log(even);

// Q2. Given an array of strings, use the filter method to create a new array containing only the strings with more than 5 characters.

const frouts =["apple", "banana", "kiwi", "orange", "grape"];

const words = frouts.filter(
    e=> e.length > 5
)

// console.log(words);

// Q3. Given an array of objects representing people, use the filter method to create a new array containing only the people who are older than 25.

const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 25 },
  ];

  const older = people.filter(
    people=> people.age > 25
  )

//   console.log(older);

//   Q4. Given an array of arrays, use the filter method to create a new array containing only the arrays with a length greater than 2.


const arrayArray = [[1, 2], ["a", "b", "c"], [true, false], [4, 5, 6]];

const subArray = arrayArray.filter(
    elm=> elm.length > 2
)

// console.log(subArray);

// Q5. Given an array of numbers, use the filter method to create a new array containing only numbers greater than 10.

const number = [5, 12, 8, 20, 3, 15];

const newNum = number.filter(
    elm=> elm > 10
)

console.log(newNum)