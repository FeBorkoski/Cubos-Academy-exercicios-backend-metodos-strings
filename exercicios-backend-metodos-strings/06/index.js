const celular = 7199918888;
formatarCelular = celular.toString();

//formato celular = 8 digitos
if (formatarCelular.length === 8) {
    let inicioCelular = formatarCelular.slice(0, 4);
    let fimCelular = formatarCelular.slice(4, 9);
    console.log("9 " + inicioCelular + "-" + fimCelular);
}
//formato com DDD + celular = 10 digitos
if (formatarCelular.length === 10) {
    let DDD = formatarCelular.slice(0, 2);
    let inicioCelular = formatarCelular.slice(2, 7)
    let fimCelular = formatarCelular.slice(6, 10)
    console.log('(' + DDD + ')' + ' ' + inicioCelular + '-' + fimCelular)
}