const aplicarCor = (txt, reg, cor) => {
    txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)
}

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i // pegar qualquer coisa do arquivo html na tag code
let codigo = texto.match(codeRegex)[0]



//palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

//tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

//String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

//comentario de multiplas linhas..
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

//comentario de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex,codigo)
files.write('codigoFonte.html', conteudoFinal)