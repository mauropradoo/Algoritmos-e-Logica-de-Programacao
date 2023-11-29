function calcular(clientes) {
  // Variável para acumular o somatório das idades
  let somatorioIdades = 0;

  // Estrutura de repetição for para percorrer os elementos do array
  for (let i = 0; i < clientes.length; i++) {
    // Acumula as idades de cada cliente
    somatorioIdades += clientes[i].idade;
  }

  // Retorna o somatório dividido pela quantidade de elementos do array
  return somatorioIdades / clientes.length;
}

// Teste da função
const clientes = [
  { nome: "José", idade: 25 },
  { nome: "Lúcia", idade: 21 },
  { nome: "Mônica", idade: 28 },
  { nome: "Luiz", idade: 20 }
];

console.log("Média:", calcular(clientes));
