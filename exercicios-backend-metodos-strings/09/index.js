const nome = 'Guido Cerqueira';
const nickMinusculo = nome.toLocaleLowerCase()

let nomeSemEspacos = nickMinusculo.replace(" ", "")

let nickname = ""
if (nomeSemEspacos.length > 12) {
    nickname = "@" + nomeSemEspacos.slice(0, 12)
    console.log(nickname)
} else if (nomeSemEspacos.length < 12) {
    nickname = "@" + nomeSemEspacos
    console.log(nickname)
}