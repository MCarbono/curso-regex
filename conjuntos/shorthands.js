const text = `1,2,3,4,5,6, a.b c!d?e
f_g`

console.log(text.match(/\d/g)) //numeros
console.log(text.match(/\D/g)) //não são números
console.log(text.match(/\w/g)) //caracteres [a-zA-Z0-9]
console.log(text.match(/\W/g)) //não caracteres

console.log(text.match(/\s/g)) //espaços
console.log(text.match(/\S/g)) //não espaços
