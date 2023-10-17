let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, '000')

let novoNome = ''
let nomeArray = nome.split('')
for (let i = 0; i < nomeArray.length; i++) {
    if (nomeArray[i] === ' ') {
        i++
        novoNome += ' ' + nomeArray[i].toUpperCase()
    } else {
        novoNome += nomeArray[i]
    }
}
nome = novoNome
email = email.trim()
console.log(identificador);
console.log(nome);
console.log(email);