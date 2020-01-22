const text = '1,2,3,4,5,6, a.b c!d?e[f'

// para definir uma classe (ou conjunto) de caracteres usa []

const regexPares = /[02468]/g
console.log(text.match(regexPares))

const text2 = 'João não vai passaear na moto.'
const regexComSemAcento = /n[aã]/g
console.log(text2.match(regexComSemAcento))