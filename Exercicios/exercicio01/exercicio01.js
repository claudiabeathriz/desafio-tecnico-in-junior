// Exercício 1: Conversão de Moedas
/* Elabore um algoritmo para ler um valor monetário em reais (R$) e convertê-lo para 
as moedas euro (€) e dólar americano (US$), considerando as seguintes taxas de câmbio:

    Taxa de câmbio para euro: €1 = R$6,10
    Taxa de câmbio para dólar: $1 = R$5,70

Imprima na tela o valor em reais inserido pelo usuário e suas conversões
para dólar americano e euro.
*/

let reais = parseFloat(prompt("Digite o valor em reais:"));

let euro = reais / 6.10;
let dolar = reais / 5.70;

alert(
    "Valor em reais: R$ " + reais.toFixed(2) +
    "\nValor em euros: € " + euro.toFixed(2) +
    "\nValor em dólares: $ " + dolar.toFixed(2)
);