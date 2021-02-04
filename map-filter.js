const numbers = [2,3,4,5,6,7,8,9];

const result = numbers.map(function square(number){
    return number * number
})
console.log(result);

const add = numbers.map(x => x*x);
console.log(add);

const result2 = numbers.filter(x => x > 5)
console.log(result2);

const result3 = numbers.find(x = x=> x >5);
console.log(result3);