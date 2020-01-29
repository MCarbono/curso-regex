const text = 'this is just a random text';

console.log(text.match(/(?:^|\s)\S/g))
const textFormated = text.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase())
console.log(textFormated)