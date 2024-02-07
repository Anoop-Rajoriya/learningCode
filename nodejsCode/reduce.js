// Q1. Sum of Numbers:
// Given an array of numbers, use the reduce method to calculate the sum of all the numbers.

// expacted output 15

const numbers = [1, 2, 3, 4, 5];

const sumOfArray = numbers.reduce(
    (pre, curr) => (pre + curr), 0
)

// console.log(sumOfArray);

// Q2. Concatenate Strings:
// Given an array of strings, use the reduce method to concatenate all the strings into a single string.

// expacted output Hello World!

const words = ["Hello", " ", "World", "!"];

const concatenateString = words.reduce(
    (pre,curr) => pre + curr, ""
)

// console.log(concatenateString);

// Q3. Calculate Average Age:
// Given an array of objects representing people with their ages, use the reduce method to calculate the average age.

// expacted output 105

const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 25 },
  ];

  const averageAge = people.reduce(
    (pre, curr) => pre + curr.age, 0
  )

//   console.log(averageAge);

// Q4. Find Maximum Value:
// Given an array of numbers, use the reduce method to find the maximum value in the array.

// expacted output 35

const number = [14, 6, 28, 35, 3, 17];

const maxiNum = number.reduce(
    (pre, curr) => pre < curr ? curr : pre , 0
)

// console.log(maxiNum);

// Q5. Flatten an Array:
// Given an array of arrays, use the reduce method to flatten the array (combine all arrays into a single array).

// expacted output [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]

const arrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

const flattenArray = arrays.reduce(
    (pre, curr) => pre.concat(curr), []
)

console.log(flattenArray);