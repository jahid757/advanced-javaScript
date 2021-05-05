const sentence = 'Hi! I am Jahid Hasan. I am a junior web developer';

const developer = 'developer';

const result = `${developer} ${sentence.includes(developer) ? 'Is Here' : 'Is not Here'}`

console.log(result)