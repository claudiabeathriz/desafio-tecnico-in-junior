// Exercício 9: Compactar Texto (Run-Length Encoding)
/* Escreva uma função chamada compactarTexto que receba uma string e 
compacte caracteres repetidos em sequência.

Requisitos:
    1 - A função deve percorrer a string caractere por caractere.
    2 - Deve contar quantas vezes cada caractere aparece em sequência.
    3 - O resultado deve conter: o caractere seguido da quantidade de repetições.
    4 - Considere letras maiúsculas e minúsculas como diferentes.
   
    Entrada: "hhhhkktt"
    Saída: “h4k2t2”
    
    Entrada: "aaabbcccc"
    Saída: “a3b2c4”
*/

function compactarTexto(texto) {
  let resultado = "";
  let contador = 1;

  for (let i = 0; i < texto.length; i++) {
    if (i < texto.length - 1 && texto[i] === texto[i + 1]) {
      contador++;
    } else {
      resultado += texto[i] + contador;
      contador = 1;
    }
  }

  return resultado;
}

alert(compactarTexto("hhhhkktt")); // Saída: “h4k2t2”
alert(compactarTexto("aaabbcccc")); // Saída: “a3b2c4”
