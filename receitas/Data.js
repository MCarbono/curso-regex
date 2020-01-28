const dataViagem = `
22/02/2005 YUCATÁN, Mexico
16/08/2006 YUMA, United States
14/04/2005 AYU, Russia
05/02/2015 YUTZ, France
26/12/2003 YU, China 
27/03/2011 YUNCOS, Spain
19/01/2017 YUSUFELI, Turkey
09/07/2013 YUWARINGI, India
`

//YU, china

const data = RegExp(/\d{2}\/\d{2}\/\d{4}\s?YU\b/g)
console.log(dataViagem.match(data))

const datas = `
Inválidas:

32/13/3000
35/05/2020

Válidos:

15/05/2020
28/01/2020
07/08/1997
30/11/1997
31/12/1999
`

const day = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
const month = '(0[1-9]|1[0-2])'
const year = '(199[1-9]|20[0-9]{2})'
const dataValida = RegExp(`\\b${day}\\/${month}\\/${year}\\b`,'g')
console.log(datas.match(dataValida))