const students = [
    {id:21 , name: "Jahid"},
    {id:31 , name: "sojib"},
    {id:41 , name: "raznur"},
    {id:71 , name: "niloy"}
];

// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     names.push(element)
// }
// console.log(names);

const names = students.map(student => student.name)
console.log(names);

const bigger = students.filter(s => s.id > 40 )
console.log(bigger);