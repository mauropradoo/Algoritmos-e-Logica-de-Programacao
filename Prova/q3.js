function objetoJSON(numero) {
    const numeroInteiro = Math.floor(numero);
    const numeroDecimal = (numero - numeroInteiro) * 100;
    const numeroDecimalInteira = Math.round(numeroDecimal);
    //JSON
    return {numeroInteiro, numeroDecimal: numeroDecimalInteira};
  }
  
  console.log("Número real:", objetoJSON(123.7));
  console.log("Número inteiro:", objetoJSON(18));
  