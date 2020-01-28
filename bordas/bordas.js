const text1 = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text1.match(/r/gi))
console.log(text1.match(/^r/gi)) //circunflexo fora dos colchetes quer dizer para encontrar determinado carac. no inícioda linha/String
console.log(text1.match(/r$/gi)) // similar ao cincurflexo citado acima, mas para o fina lda linha; usa-se o $.

console.log(text1.match(/^r.*r$/gi)) //problema do dotall

const texto = 'Escreva uma regex capaz de encontrar no texto deste parágrafo todas as palavras amado que terminam com a letra "o"';
'Escreva uma regex capas de encontrar no parágrafo acima todas as palavras que começam e terminam com vogais.'

console.log(texto.match(/o\b/gi))
console.log(texto.match(/\b(a|e|i|o|u)\w+(a|e|i|o|u)\b/g))