const text = `Os e-mails dos convidados são: 
                - fulano@cod3r.com.br
                - xico@gmail.com
                - carbono@gmail.com
                -carbono.marcelo@gmail.com.br
               `

const regex = RegExp(/[A-Za-z-0-9]{3,}@\w+\.\w+(\.\w+)?(\.\w+)?/gi)
//regex abaixo apresentada no  video correção
const regex2 = RegExp(/[a-zA-Z0-9]+@[a-zA-Z-0-9]+\.[a-zA-z0-9]{2,4}/g)
const regex3 = RegExp(/\w+@\w+\.\w+/g)
//console.log(text.match(regex))
console.log(text.match(regex2))
console.log(text.match(regex3))
console.log(text.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(text.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))