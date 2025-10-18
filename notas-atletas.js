let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

for (let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i].nome;
  let notas = atletas[i].notas;

  // Ordena as notas em ordem crescente
  let notasOrdenadas = notas.sort((a, b) => a - b);

  // Remove a menor e a maior nota
  let notasComputadas = notasOrdenadas.slice(1, 4);

  // Calcula a média das três notas do meio
  let soma = 0;
  notasComputadas.forEach(nota => soma += nota);
  let media = soma / notasComputadas.length;

  // Exibe os resultados
  console.log(`Atleta: ${atleta}`);
  console.log(`Notas Obtidas: ${notas.join(",")}`);
  console.log(`Média Válida: ${media}`);
  console.log(""); // linha em branco para separar os atletas
}
