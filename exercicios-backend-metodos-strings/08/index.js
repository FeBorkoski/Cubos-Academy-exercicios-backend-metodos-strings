const cpf = "011.022.033-44";
const cnpj = "011.022.033/0001-30";
const removerPontuacao = cpf.replace(/[.-]/g, "");
const removerPontuacaoCnpj = cnpj.replace (/[./-]/g, "");
console.log(removerPontuacao);
console.log(removerPontuacaoCnpj);