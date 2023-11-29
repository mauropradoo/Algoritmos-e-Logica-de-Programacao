function retirarAcentos(texto) {
  //Requisito 1
  let resultado = "";

  //Requisito 2
  for (let i = 0; i < texto.length; i++) {
    //Requisito 3
    if (
      texto[i] === "ã" ||
      texto[i] === "á" ||
      texto[i] === "é" ||
      texto[i] === "è" ||
      texto[i] === "ê" ||
      texto[i] === "í" ||
      texto[i] === "ô" ||
      texto[i] === "ó" ||
      texto[i] === "ú"
    ) {
      resultado += trocarAcento(texto[i]);
    } else {
      resultado += texto[i];
    }
  }
  return resultado;
}

function trocarAcento(acento) {
  switch (acento) {
    case "ã":
      return "a";
    case "á":
      return "a";
    case "é":
      return "e";
    case "è":
      return "e";
    case "ê":
      return "e";
    case "í":
      return "i";
    case "ô":
      return "o";
    case "ó":
      return "o";
    case "ú":
      return "u";
    default:
      return acento;
  }
}

const texto = "Olá, você precisa retirar os acentos de: ã,á,é,è,ê,í,ô,ó e ú";
const resposta = retirarAcentos(texto);
console.log("Resposta:", resposta);
