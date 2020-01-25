const text1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(text1.match(/<(\w+)>.*<\/\1>/g))

const text2 = 'Lentamente é mente muito lenta.'
console.log(text2.match(/(lenta)(mente).*\2.*\1/gi))
console.log(text2.match(/(?:lenta)(mente).*\1/gi)) // ?: n guarda o valor do grupo
console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi, '$2 lenta'))

const text3 = 'abcdefghijkll'
console.log(text3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))