const aplicarCor = (txt, reg, cor) => {
    txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)
}

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i