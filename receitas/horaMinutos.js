const text = `
Inválidos:

25:00
24:61

Válidos:

23:59
24:00
07:00
15:00
14:15
16:34
`
const hour = '(0[1-9]|1[0-9]|2[0-4])'
const minutes = '(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])'
const horaMinuto = RegExp(`\\b${hour}:${minutes}\\b`,'g')

console.log(text.match(horaMinuto))