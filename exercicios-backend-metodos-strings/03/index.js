const texto = "Aprenda programar do zero na Cubos Academy";

function textoAmigavel(texto) {
    let textoNovo = texto.toLowerCase();
    textoNovo = textoNovo.replace(/ /g, "-");
    console.log(textoNovo);
}
textoAmigavel(texto);