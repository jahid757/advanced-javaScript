//Variable let const

let taka = 20;
taka = 15;

const person = {
    name:'Jahid',
    age:17
}

const name = "jahid";

const statement = `${person.name} Hasan Is A Good Developer`;
// console.log(statement);

const products = [{name:'laptop'},{price:45000}];

// console.log(products[0].name);

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // console.log(product);
    
}

function add(num1,num2) {
    return num1 + num2
}

// console.log(add(10,20));

const multiplyFive = num => num * 5;

// console.log(multiplyFive(5));

const add2 = (num1,num2) =>  num1 + num2

// console.log(add2(30,50));

const doMath = (x,y) =>{
    const sum = x + y;
    return sum * 2;
}

console.log(doMath(2,2));