const text = 'João é calmo, mas no trânsito fica nervoso.'

console.log(text.match(/[\wÀ-ù]+/g))

//positive lookahead
console.log(text.match(/[\wÀ-ù]+(?=,)/gi))
console.log(text.match(/[\wÀ-ù]+(?=\.)/gi))
console.log(text.match(/[\wÀ-ù]+(?=, mas)/gi))

//negative lookahead
console.log(text.match(/[\wÀ-ù]+\b(?!,)/gi))
console.log(text.match(/[\wÀ-ù]+[\s|\.](?!,)/gi))