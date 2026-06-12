// Exercício 4: Palíndromo
/* Escreva um programa que verifique se uma frase é um palíndromo. Um
palíndromo é uma sequência que pode ser lida da mesma maneira da
esquerda para a direita e da direita para a esquerda.

Requisitos:
1. Solicite ao usuário uma frase.
2. Remova todos os espaços e ignore a diferença entre letras maiúsculas e minúsculas.
3. Verifique se a frase é igual quando lida ao contrário e informe se ela é um palíndromo ou não.

Dica: Use toLowerCase() e split(). 
*/

let frase = prompt("Digite uma frase:");
let fraseFormatada = frase.toLowerCase().replaceAll(" ", "");
let fraseInvertida = "";

for (let i = fraseFormatada.length - 1; i >= 0; i--) {
    fraseInvertida += fraseFormatada[i];
}

if (fraseFormatada === fraseInvertida) {
    alert("A frase é um palíndromo.");
}   else {
    alert("A frase não é um palíndromo.");
}