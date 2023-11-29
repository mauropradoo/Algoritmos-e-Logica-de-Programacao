function decimalArray(numero) {
  const numeroInteiro = Math.floor(numero);
  const numeroDecimal = (numero - numeroInteiro) * 100;
  const numeroDecimalInteira = Math.round(numeroDecimal);
  return [numeroInteiro, numeroDecimalInteira];
}

console.log("Número real:", decimalArray(123.7));
console.log("Número inteiro:", decimalArray(18));
