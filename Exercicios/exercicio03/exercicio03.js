// Exercício 3: Fatorial
/*  Escreva um programa que:
1. Solicite ao usuário um número inteiro positivo e calcule o seu fatorial.
2. Pergunte ao usuário se ele quer calcular o fatorial de outro número.
Se o usuário digitar "S" ou “s”, o programa deve reiniciar e permitir outro cálculo; 
se digitar "N" ou “n”, o programa deve encerrar.
3. Valide a entrada do usuário para garantir que apenas números
inteiros positivos são aceitos. Se o usuário digitar um número inválido,
exiba uma mensagem de erro e peça a entrada novamente
*/

let resposta = "S";

while (resposta === "S") {

    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    while (isNaN(numero) || numero < 0) {
        numero = parseInt(
            prompt("Valor inválido. Digite um número inteiro positivo:")
        );
    }

    let fatorial = 1;

    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é ${fatorial}.`);

    resposta = prompt(
        "Deseja calcular outro fatorial? (S/N)"
    ).toUpperCase();
}

alert("Programa encerrado.");