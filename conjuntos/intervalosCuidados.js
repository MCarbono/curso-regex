const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g)) //não define um range

console.log(text.match(/[A-z]/g)) // intervalos usam a ordem da tabela UNICODE

//Tem de respeitas a ordem da tabela UNIC0DE
//console.log(text.match(/[a-Z]/g))
comsole.log(text.match(/[9-1]/g))