const cpf = "12345654580";
const cnpj = "12345678000199";

function verificarCPF(cpf) {
    if (cpf.length !== 11) {
        console.log("CPF inválido");
    } else {
        console.log(`${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`)
    }
};
function verificarCNPJ(cnpj) {
    if (cnpj.length !== 14) {
        console.log("CNPJ inválido");
    } else {
        console.log(`${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`);
    }
}
verificarCPF(cpf);
console.log("___________________");
verificarCNPJ(cnpj);