function calcular(clientes) {
  // Requisito 1
  let somaIdades = 0;

  // Requisito 2
  for (let i = 0; i < clientes.length; i++) {
    somaIdades += clientes[i].idade;
  }

  // Requisito 3
  return somaIdades / clientes.length;
}

const clientes = [
  { nome: "José", idade: 25 },
  { nome: "Lúcia", idade: 21 },
  { nome: "Mônica", idade: 28 },
  { nome: "Luiz", idade: 20 },
];

console.log("Média:", calcular(clientes));
