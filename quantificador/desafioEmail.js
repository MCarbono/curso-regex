const text = `Os e-mails dos convidados são: 
                - fulano@cod3r.com.br
                - xico@gmail.com
                - carbono@gmail.com.br.sp
                #$%@321.3231`

const regex = RegExp(/[A-Za-z-0-9]{3,}@\w+\.\w+(\.\w+)?(\.\w+)?/gi)
console.log(text.match(regex))