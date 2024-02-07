// Q1. Square Numbers:
// Given an array of numbers, use the map method to create a new array containing the square of each number.

// expacted output [ 1, 4, 9, 16, 25 ]

const numbers = [1, 2, 3, 4, 5];

const square = numbers.map(
    elm=> elm*elm
)

// console.log(square);

// Q2. Uppercase Strings:
// Given an array of strings, use the map method to create a new array containing the uppercase version of each string.

// expacted output [ 'APPLE', 'BANANA', 'KIWI', 'ORANGE', 'GRAPE' ]

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const upperCaseString = words.map(
    elm=> elm.toUpperCase()
)

// console.log(upperCaseString);

// Q3. Extracting Values from Objects:
// Given an array of objects representing people, use the map method to create a new array containing only the ages of each person.

// expacted output [ 28, 22, 30, 25 ]

const peoples = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 25 },
  ];

const peoplesAge = peoples.map(
    elm => elm.age
)

// console.log(peoplesAge);

// Q4. Converting Fahrenheit to Celsius:
// Given an array of temperatures in Fahrenheit, use the map method to create a new array containing the corresponding temperatures in Celsius. The formula for conversion is C = (F - 32) * 5/9.

// expacted output [ 0, 20, 40, 100 ]

const temperaturesFahrenheit = [32, 68, 104, 212];

const temperaturesCelsius = temperaturesFahrenheit.map(
    F => (F - 32) * 5/9
)

// console.log(temperaturesCelsius);

// Q5. Adding Index to Elements:
// Given an array of strings, use the map method to create a new array where each element is prefixed with its index.

// expacted output [ '0 : apple', '1 : banana', '2 : kiwi', '3 : orange', '4 : grape' ]

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];

const friutsWithIndex = fruits.map(
    (elm,index) => `${index} : ${elm}`
)

console.log(friutsWithIndex);