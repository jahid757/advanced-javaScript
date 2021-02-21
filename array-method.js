const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const friends = ['Jahid', 'Hasan', 'summon', 'niloy'];

const products = [{
        id: 1,
        name: 'Laptop',
        price: 45000
    },
    {
        id: 2,
        name: 'mobile',
        price: 15000
    },
    {
        id: 3,
        name: 'watch',
        price: 5000
    }
];

// map

const names = products.map(product => product.name);
// console.log(names);
const price = products.map(product => product.price);
// console.log(price);
const price2 = products.map(product => {
    return product.name
})
// console.log(price2);
// forEach

products.forEach(product => {
    // console.log(product);
});

const cheaper = products.filter(product => product.price < 10000);
// console.log(cheaper);

// Remove An Item Using Filter

const removeItem = products.filter(product => product.id != 1);

// console.log(removeItem);

// Has Watch Or Find Item

const hasWatch = products.find(product => product.name === 'watch');
console.log(hasWatch);

