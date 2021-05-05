const money = 500;
const user = true;
// let food ;

// if(money > 100){
//     food = 'Pasta'
// }else{
//     food = 'Normal Food'
// }
// console.log(food);


// Ternary 

let food = money > 100 ? 'Pasta' : 'Normal Food';

// console.log(food);
const active = user ? 'Active' : 'Inactive';

// console.log(active);

// active ? firstFunction() : secondFunction()

//write one function 

// active && firstFunction()

const x = user && 5;
const y = user || 7;
// console.log(x);


// string to number
const number = +'57';
// console.log(number);

// number to string 

const string = 45 + '';
// console.log(string);

function add(num1,num2) {
    num2 = num2 || 5;
    return num1 + num2
}

// console.log(add(45));

const person = [{name: 'Jahid', id:25,age:17},{name: 'Hasan', id:27,age:19},{name: 'Niloy', id:45,age:15}];

const json = JSON.stringify(person);
// console.log(json);
const data = JSON.parse(json);

// console.log(data[1].name);

//Local Storage 

localStorage.setItem('userId', 1791)

const getItem = localStorage.getItem('userId')
// console.log(getItem);

const localStorageObject = localStorage.setItem("Person", JSON.stringify(person)) ;
const localStorageGetItem = localStorage.getItem('Person');
const personParsed = JSON.parse(localStorageGetItem);
console.log(JSON.parse(localStorageGetItem));

console.log(Object.values(personParsed[0]));