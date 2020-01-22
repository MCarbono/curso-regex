const text = 'Bom\ndia'

console.log(text.match(/.../gi))
console.log(text.match(/..../gi)) //o ponto não engloba o \n

//dotall - algumas linguages tem um flag /exp/s