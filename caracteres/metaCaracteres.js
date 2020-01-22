// . ? * + - ^ $ | [] {} () \ :
// o uso de \ antes de um meta caractere serve para a regex considerá-lo não como um meta caractere, e sim como um caractere.
const text = '1,2,3,4,5,6,a.b c!d7e'
const regexDot = /\./g

console.log(text.split(regexDot))

const regexSimbols = /,|\.|\?|!|/g;
console.log(text.split(regexSimbols))