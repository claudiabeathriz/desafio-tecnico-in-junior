// Exercício 8: Consumo de Energia
/* Crie uma função chamada analisarConsumo que receba um array de
números representando o consumo em kWh de diferentes aparelhos eletrônicos.

Requisitos:
    Entrada do Usuário: A função deve solicitar ao usuário (via prompt)
    um valor numérico que servirá como o limite máximo de consumo
    para a categoria "Econômico".

    Processamento: Para cada valor de consumo no array, determine a
    categoria:

       "Econômico": Se o consumo for menor ao limite inserido.
       "No Limite": Se o consumo for igual ao limite inserido.
       ""Acha que é sócio da Enel": Se o consumo for maior que o limite inserido.

    Retorno: A função deve retornar um novo array contendo as strings
    das classificações ("Econômico ", “No Limite” ou ""Acha que é sócio da Enel"), 
    mantendo a ordem original dos aparelhos.
        
    Saída no Console: Após o processamento, a função deve imprimir
    uma mensagem para cada aparelho no seguinte formato:

        Aparelho 1: Econômico
        Aparelho 2: Alto Consumo
        (...)
*/

function analisarConsumo(consumos) {
  const limite = parseFloat(prompt("Digite o limite máximo de consumo (kWh):"));
  const categorias = [];

  for (let i = 0; i < consumos.length; i++) {
    if (consumos[i] < limite) {
      categorias.push("Econômico");
    } else if (consumos[i] === limite) {
      categorias.push("No Limite");
    } else {
      categorias.push("Acha que é sócio da Enel");
    }
  }

  for (let i = 0; i < categorias.length; i++) {
    console.log(`Aparelho ${i + 1}: ${categorias[i]}`);
  }

  return categorias;
}

const resultado = analisarConsumo([80, 100, 150, 60]);

console.log(resultado);
