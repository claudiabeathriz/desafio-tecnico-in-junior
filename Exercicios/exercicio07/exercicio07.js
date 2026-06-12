// Exercício 7: Fila de Espera
/* Escreva um programa para simular uma fila de espera em uma central de atendimento ao cliente.
O programa deve iniciar exibindo na tela um menu interativo contendo a lista de todos os clientes 
esperando atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o Maria, etc).
O menu deve permitir escolher entre as seguintes opções:

1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila
(solicitando o nome do cliente).
2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o
nome do cliente que está sendo atendido.
3 - “Sair”: Encerra o programa.
O programa só deve ser encerrado ao escolher a opção 3. 
Caso contrário, ele deve retornar ao menu principal.
*/

const fila = [];
let opcao = "";

while (opcao !== "3") {
  let menu = "Fila de Espera\n\n";

  for (let i = 0; i < fila.length; i++) {
    menu += `${i + 1}º ${fila[i]}\n`;
  }

  menu += "\n";
  menu += "1 - Novo Cliente\n";
  menu += "2 - Atender Cliente\n";
  menu += "3 - Sair";

  opcao = prompt(menu);

  switch (opcao) {
    case "1":
      let cliente = prompt("Nome do cliente:");
      fila.push(cliente);
      break;
    case "2":
      if (fila.length === 0) {
        alert("Não há clientes na fila.");
      } else {
        let atendido = fila.shift();
        alert(`Atendendo: ${atendido}`);
      }
      break;
    case "3":
      alert("Programa encerrado.");
      break;
    default:
      alert("Opção inválida.");
  }
}
