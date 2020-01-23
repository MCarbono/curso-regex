const text = `1,2,3,4,5,6,a.b c!d?e`

console.log(text.match(/\D/g))
console.log(text.match(/[^0-9]/g))

console.log(text.match(/[^\d!\?\[\s,\.]/g))

const text2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'
console.log(text2.match(/[^!-/:-@\s]/g))
