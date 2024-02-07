// ******Function in javascript*****
// *******date 14 jan 2024********

// multiple value passing in function

function calculateCaretPrice(...price)
{
    // ... dot here represent rest oprator
    return price;
}

// console.log(calculateCaretPrice(54,45,3,23,23));

// add number function problem

function addNumbers (n1, n2)
{
    return n1+n2;
}
// console.log(addNumbers(5,10));

// arrow function practise problem 

// const arrowFunciton = (a,b) =>
// {
//     return a*b;
// }

// one line syntax 

const arrowFunciton = (a,b) => (a*b);

// console.log(arrowFunciton(5,5));

// IIFI practise problem

// (function (name)
// {
//     console.log(`hello ${name} iam iifi.`);
// })("anoop");

(
    () => {console.log("hello iifi")}
)();

