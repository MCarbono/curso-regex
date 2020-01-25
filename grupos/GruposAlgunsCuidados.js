const text = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(text.match(/[(abc)]/gi)) //não é um grupo
console.log(text.match(/([abc])/gi)) // é grupo
console.log(text.match(/(abc)/gi)) //evite o uso de grupos desnecessários