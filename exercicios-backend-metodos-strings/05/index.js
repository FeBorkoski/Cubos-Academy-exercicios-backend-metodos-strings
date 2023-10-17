const numeroCartao = '1111222233334444';
const numeroFormatado = numeroCartao.slice(0, 4) + '********' + numeroCartao.slice(-4);
console.log(numeroFormatado);