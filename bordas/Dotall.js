const text1 = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text1.match(/^r.*r$/gi)) //problema do dotall
console.log(text1.match(/^r[\s\S]*r$/gi)) //solução do dotall(JS)
//dotall ecma 2018 utiliza-se flag s

console.log(text1.match(/^r.*r$/gis))