

class Stack 
{
    constructor ()
    {
        this.stack = new Array();
        this.max = -1;
    }

    push (elm)
    {
        this.stack.push(elm);
        this.max++;
    }

    pop (elm)
    {
        this.stack.pop();
        this.max--;
    }
    peak ()
    {
        console.log(this.stack);
    }
}

// stack using shift and unshift 
class Stack2 
{
    constructor ()
    {
        this.Stack2 = new Array();
        this.front = -1;
        this.rear = -1;
    }

    push (elm)
    {
        this.Stack2.unshift(elm);
        this.front++;
        this.rear++;
    }

    pop ()
    {
        this.Stack2.shift();
        this.rear--;
        if (this.rear === this.front)
        {
            this.front--;
        }
    }
    peak ()
    {
        console.log(this.Stack2);
    }
}

function driver ()
{
    let s1 = new Stack()

// s1.push(5)
// s1.push(10)
// s1.peak()
// s1.pop()
// s1.peak()
    let s2 = new Stack2()

s2.push(5)
s2.peak()
s2.push(10)
s2.peak()
s2.pop()
s2.peak()
}

// driver()


let numArray = [5,3,2,6,3,6,3,3];
let charArray = ["anoop", "manish", "pankaj", "ritesh"];

// console.table(
//     [
//         numArray.indexOf(5) ,
//         charArray.includes("anoop") ,
//         charArray.slice(0, 1) ,
//         charArray ,
//         numArray.splice(0,3) ,
//         numArray
//     ]
// )

// let a = numArray.push(charArray)
// console.log(a);

// let b = numArray.concat(charArray)
// console.log(b)

// let spread = [...charArray, ...numArray]
// console.log(spread);

// let c = [3,5,3,5,5,[4,5,3,5], ["a", "g", [3,54,3]]]

// let d = c.flat(Infinity);
// console.log(d)

// console.log(Array.isArray(c))
// console.log(Array.from("anoop rajoriya"));


// let a = 390394;
// let b = 390390;
// let c = 2090984;
// let d = 29059820;

// console.log(Array.of(a,b,c,d))
