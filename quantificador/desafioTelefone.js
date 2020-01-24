const text = `Lista telefônica:
                - (11)98756-1212
                -98765-4231
                3892-1407
                (12)3892-1007`

const regex = RegExp(/(\(\d{2}\))?\d{4,5}\-\d{4}/g)
//regex abaixo apresentada no video de correção
const regex2 = RegExp(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g)
console.log(text.match(regex))
console.log(text.match(regex2))