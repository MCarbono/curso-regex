const text = `
Lista Telefônica:
    - (21) 1234-6589
    - (11) 62300-2234
    - 5678-7809
    - (85)3333-7809
    - (1) 4231-1234
`

console.log(text.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))

const lista =
`Brenda Sioux, (11)2222-2222
Brenda Sioux, (11)92222-2222
Brendan Eich, (11)3333-3333
Brendan Eich, (11)90000-0000
Felipe Monobe, (11)4444-4444
Felipe Monobe, (11)94444-4444`

const regex = RegExp(/\Felipe\sMonobe,\s(\(\d{2}\)\s?)?\s?\d{4,5}-\d{4}/g)
console.log(lista.match(regex))

//código abaixo obriga o primeiro número de telefone começar com o digito 9
const numero = '(12) 98139-9848'
console.log(numero.match(/(\(\d{2}\))?\s?[9]{1}\d{3,4}-\d{4}/g))