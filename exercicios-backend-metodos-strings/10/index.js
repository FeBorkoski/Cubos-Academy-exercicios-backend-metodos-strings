function validarArquivo(nomeArquivo) {
    let validacao = nomeArquivo.slice(nomeArquivo.length - 3);

    if (validacao === "jpg" || validacao === "jpeg"
        || validacao === "gif" || validacao === "png") {
        return "Arquivo válido";
    } else {
        return "Arquivo inválido";
    }
}

const nomeArquivo = "Foto da Familia.jpdg";
console.log(validarArquivo(nomeArquivo));
