// ************Objects**************
// ************date 14 jan 2024**************

// singleton -> its a single object of own type. 
// we can create by using objects constructor Object.create(). 

// Objects literals -> by using normal let or const to create objects.

// const mysymbol = Symbol("salary");
// const Users = {     // in this we can define key and value.
//     name: "anoop" ,
//     "last name": "rajoriya" ,
//     age: 18 ,
//     email: "anooprajoriya0@gmial.com" ,
//     login: false ,
//     lastLogin: ["mon", "tus", "sun"] ,
//     mysymbol: "50K" , // this not use as a symbol either use like string.
//     [mysymbol]: "50k" // we need to use [] notaion to use symbole.
// }

// ************objects acessing****************

// console.log(Users.name);
// console.log(Users["email"]); // because by deafult key is string.
// // console.log(users."last name") // be cant use like this.
// console.log(Users["last name"]); // the syntax.
// console.log(Users.mysymbol);
// console.log(Users[mysymbol]); // syntax of acessing symbole key
// console.log(Users); //difference between symbole with [] notation and without

// *******over writing objects value************

// console.log(Users.login)
// Users.login = true;
// console.log(Users.login)
// Object.freeze(Users) // we specify the freezing object to not perform overwrite values.
// Users.login = false;
// console.log(Users.login);

// ******adding key and value*******

// Users.friend = "nikhil";
// console.log(Users.friend)

// we can treat function as var

// Users.greeting = function()
// {
//     return("hello my dear friend");
// }

// Users.greeting2 = function()
// {
//     return(`my dear friend i am ${this.friend}`);
//     // we also use this key word for acess their key values  
// }

// console.log(Users.greeting);
// console.log(Users.greeting());
// console.log(Users.greeting2());

// ********Object part two*********

// const jsuser = new Object(); //singleton object
// const jsuser1 = {}; // non-singleton object

// // output is same 
// console.log(jsuser);
// console.log(jsuser1);
// jsuser.name = "anoop";
// jsuser.id = 78248;
// jsuser.isloggedin = false;
// console.log(jsuser);

// ********object can be nested*********

// const user = {
//     email: "user@gmail.com" ,
//     address: {
//         country: "indea" ,
//         city: "gwalior" ,
//         localAdd: {
//             zipcode: 474001 ,
//             galiNo: "c45" ,
//         }
//     }
// }
// console.log(user.address);
// console.log(user.address.localAdd);

// *************concatenating objects*********

// const animal = { // target
//     a1: "lion" ,
//     a2: "elephent" ,
//     a3: "fox"
// }
// const pet = { // source
//     p1: "dog" ,
//     p2: "cat" ,
//     p3: "cow"
// }

// const zoo1 = {animal , pet};
// console.log(zoo1);

// const zoo2 = Object.assign(animal , pet);
// console.log(zoo2);

// const zoo3 = {...animal , ...pet}
// console.log(zoo3)

// console.log(Object.keys(zoo3)) // return array of keys.
// console.log(Object.values(zoo3)) // return array of values.
// console.log(Object.entries(zoo3))
 

// *********Objects part 3***********

// const product = {
//     price: 98 ,
//     id: 73873 ,
//     name: "samsung A24"
// }

// // ************Object destructuring***********

// const productName = product.name // without destructuring.

// const {price: productPrice} = product //with destructuring.
// const {id} = product;

// console.table(
//     [
//         productName ,
//         productPrice ,
//         id
//     ]
// )

