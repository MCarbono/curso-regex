//no inicio...
//UM byte
// simbolos, pontuação, A-Z, a-z, 0-9

//Dois Bytes - 65500+ caracteres
//+ simbolos, pontuação, A-Z, a-z, 0-9

//Unicode
//Quantidade de Bytes variável - expansível
//SUporta mais de 1 Milhão caracteres
//https://unicode-table.com/pt/

const text = 'aʬcdSʆ'
console.log(text.match(/\u02ack|\u0286/gi))