// const numbers = [10,20,30,40,50,60];

// numbers.map(number => number*2);
// numbers.filter(number => number > 10);
// numbers.find(number => number > 25);

// const total = numbers.reduce((sum,number) =>sum+number ,0);
// console.log('From Reduce',total);

// let totalValue = 0;
// for (let i = 0; i < numbers.length; i++) {
//     totalValue += numbers[i];
// }

// console.log('From For Loop',total);


const friends = [
    {name:"Jahid",age:17},
    {name:"Hasan", age:18},
    {name:"Niloy",age:16},
    {name:"Raznur",age:19},
    {name:"Sojib",age:15}
];
// console.log(friends[0]);

const friend = friends.reduce((sum,friend) => {
    console.log(sum,friend);
    return sum + friend.age
},0);

console.log(friend);
