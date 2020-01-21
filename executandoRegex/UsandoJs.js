const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos de regex...')
//console.log(regexNove.test(text))
//console.log(regexNove.exec(text))

const regexLetras = /[a-f]/g;
console.log(regexLetras.exec(text))
console.log(text.match(regexLetras))
console.log(text.search(regexLetras))//método search mostra o index do primeiro elemento procurado.
console.log(text.replace(regexLetras, 'Achei'))
console.log(text.split(regexLetras))
