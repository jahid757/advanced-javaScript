// Array destructuring


const numbers = [45, 90, 40, 75, 57];

// const num1 = numbers[0];
// const num2 = numbers[1];

// console.log(num1,num2);

// const [num1,num2] = [45,90];

const [num1, num2] = numbers

// console.log(num1,num2);

function boxify(num) {
    return [num, num + 5];
}
const [box1,box2] = boxify(7)
// console.log(boxify(5));
// console.log(box1,box2);



// Object destructuring

// const person = {
//     id:7,
//     name:'jahid',
//     age:17,
//     money:57000
// }

// console.log(person.name,person.age);


// const {name,age} = {
//     id:7,
//     name:'jahid',
//     age:17,
//     money:57000
// }

// console.log(name,age);

const person = {id:7,name:'jahid',age:17,money:57000};
const {money} = person

// console.log(money);


//object shortcut

const x = 25;
const y = 30;

// const number = {x:x,y:y}

const number = {x,y}
// console.log(number);

// new array creat using three dots

const newNumbers = [...numbers , 57];
console.log(newNumbers);