
const p0 = new Promise((resolve, reject) => {
    const flag = true;

    if (flag) {
        console.log("run");
        resolve(flag);
    } else {
        console.log("error");
        reject(flag);
    }
})

// method one
// p0.then(res=>{
//     console.log(res);
// })
// .catch((reject)=>{
//     console.log(reject);
// })
// .finally(console.log("finally"));

//method two
// p0.then(resolve=>{
//     console.log(resolve);
//     console.log(typeof resolve);
//     return Number(resolve);
// })
// .then(arg=>{
//     console.log(arg);
//     console.log(typeof arg);
//     return String(arg);
// })
// .then(arg=>{
//     console.log(arg);
//     console.log(typeof arg);
// })
// .catch(error=>{
//     console.log(error);
// })
// .finally(console.log("i am finally"));


//metod three
// const hendle = async () => {
//     const res = await p0;
//     console.log(res);
// }
async function hendle (){
    const res = await p0;
    console.log(res);
}
hendle()