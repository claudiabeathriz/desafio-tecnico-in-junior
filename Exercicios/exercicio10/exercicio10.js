// Exercício 10: Gerenciamento de Jogadores
/* Você está desenvolvendo um sistema para gerenciar jogadores de um time de esportes.
Cada jogador deve ter as seguintes propriedades:
    Nome (string)
    Idade (número)
    Posição (string)
    Pontuação (número)

Implemente as seguintes funcionalidades:
    1. Crie um array vazio chamado time para armazenar os jogadores cadastrados.
    2. Escreva uma função chamada adicionarJogador que:
        Recebe como parâmetros os dados de um jogador (nome, idade, posição e pontuação). 
            Observação: esses dados devem ser inseridos pelo usuário.
        Cria um objeto representando o jogador e o adiciona ao array time.
    3. Escreva uma função chamada buscarPorPosicao que:
        Recebe como parâmetro uma string representando a posição.
            Observação: esse dado deve ser inserido pelo usuário.
        Retorna todos os jogadores dessa posição.
        Se não houver jogadores, exiba uma mensagem apropriada.
    4. Escreva uma função chamada listarTime que:
        Imprime todos os jogadores cadastrados no time no console,
        um por linha.
    5. Escreva uma função chamada calcularPontuacaoMedia que:
        Calcula e retorna a pontuação média de todos os jogadores do time.
    6. O programa deve iniciar exibindo o seguinte menu interativo, que
    deve permitir ao usuário escolher uma das opções:

        1 - Adicionar jogador
        2 - Buscar por posição
        3 - Listar time
        4 - Calcular pontuação média
        5 - Sair
*/

const time = [];

function adicionarJogador() {
  const nome = prompt("Digite o nome do jogador:");
  const idade = parseInt(prompt("Digite a idade do jogador:"));
  const posicao = prompt("Digite a posição do jogador:");
  const pontuacao = parseInt(prompt("Digite a pontuação do jogador:"));

  const jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao,
  };

  time.push(jogador);

  console.log("Jogador adicionado com sucesso!");
}

function buscarPorPosicao() {
  const posicao = prompt("Digite a posição:");

  let encontrou = false;

  for (let i = 0; i < time.length; i++) {
    if (time[i].posicao === posicao) {
      console.log(
        "Nome: " +
          time[i].nome +
          " | Idade: " +
          time[i].idade +
          " | Pontuação: " +
          time[i].pontuacao,
      );

      encontrou = true;
    }
  }

  if (encontrou === false) {
    console.log("Nenhum jogador encontrado nessa posição.");
  }
}

function listarTime() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  console.log("=== TIME ===");

  for (let i = 0; i < time.length; i++) {
    console.log(
      "Nome: " +
        time[i].nome +
        " | Idade: " +
        time[i].idade +
        " | Posição: " +
        time[i].posicao +
        " | Pontuação: " +
        time[i].pontuacao,
    );
  }
}

function calcularPontuacaoMedia() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  let soma = 0;

  for (let i = 0; i < time.length; i++) {
    soma = soma + time[i].pontuacao;
  }

  let media = soma / time.length;

  console.log("Pontuação média do time: " + media.toFixed(2));
}

function exibirMenu() {
  let opcao;

  do {
    opcao = prompt(
      "Escolha uma opção:\n\n" +
        "1 - Adicionar jogador\n" +
        "2 - Buscar por posição\n" +
        "3 - Listar time\n" +
        "4 - Calcular pontuação média\n" +
        "5 - Sair",
    );

    switch (opcao) {
      case "1":
        adicionarJogador();
        break;

      case "2":
        buscarPorPosicao();
        break;

      case "3":
        listarTime();
        break;

      case "4":
        calcularPontuacaoMedia();
        break;

      case "5":
        console.log("Programa encerrado.");
        break;

      default:
        console.log("Opção inválida.");
    }
  } while (opcao !== "5");
}

exibirMenu();
