const text1 = 'O José Simão é muito emgraçado...hehehehehe';

console.log(text1.match(/(he)+/g))

const text2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(text2.match(/(http:\/\/)?(w{3})?\.?\w+\.\w+\.\w+/g)) //minha regex
console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))