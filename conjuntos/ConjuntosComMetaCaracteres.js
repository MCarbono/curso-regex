const text = '.$+*?-';

console.log(text.match(/[.$+*?-]/g)) // não precisa do escape dentro de um conjunto
console.log(text.match(/[$-?]/g)) // isso é um intervalo

//não é um intervalo
console.log(text.match(/[$\-?]/g))
console.log(text.match(/[-?]/g))