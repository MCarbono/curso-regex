const text = `
Lista Telefônica:
    - (21) 1234-6589
    - (11) 62300-2234
    - 5678-7809
    - (85)3333-7809
    - (1) 4231-1234
`

console.log(text.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))