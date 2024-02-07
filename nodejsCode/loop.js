// *****************date 20 jan 2024**************
// *******************Loops in js*******************

const userName = 
[
    "mohan" ,
    "ram" ,
    "karan" , 
    "sumit" ,
    "pankaj" ,
    "dipesh" ,
    "anoop"
]

const userId =
{
    mohan: 512 ,
    ram: 513 ,
    karan: 514 ,
    sumit: 515 ,
    pankaj: 516 ,
    dipesh: 517 ,
    anoop: 518
}

const string = "How to iterate over a JavaScript object";


// for loop

// for(let i=0; i<=userName.length; i++)
// {
//     console.log(`${userName[i]} sheet number is ${i}`);
// }

// for of loop
// it pick values 

// with array 
for (const val of userName)
{
    // console.log(val);
}

// with object
// for (const val of userId)
// {
//     console.log(val);// we cant iterate over object useing for of
// }

// with string
for (const char of string)
{
    // console.log(char);
}

// for in loop
// it pick a keys. 

// with array 
for (const name in userName)
{
    // console.log(`${name} in username ${userName[name]}`);
}

// with Object
for (const id in userId)
{
    // console.log(`${id} in userid ${userId[id]}`);
}

// with string

for (const char in string)
{
    // console.log(`${char} in char ${string[char]}`);
}

// for each loop

// with array 

userName.forEach(
    (val)=>{
        // console.log(key);
    }
)
userName.forEach(
    (val,index, array)=>{
        // console.log(`${val} index is ${index}`);
        // console.log(array);
    }
)


// with Object

// userId.forEach(element => {   // not work
//     console.log(element);
// });


// with string 
// not work 