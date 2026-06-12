// Exercício 2: Equação Quadrática
/* Escreva um programa em que o usuário insira os coeficientes a, b e c de
uma equação quadrática da forma: ax2 + bx + c = 0

O programa deve:
1. Calcular o discriminante (Δ) pela fórmula: Δ = b2 − 4ac
2. Avaliar o valor de Δ para determinar o número de raízes reais:
    Se Δ > 0, exibir as duas raízes reais e distintas.
    Se Δ = 0, exibir uma raiz real (raiz dupla).
    Se Δ < 0, informar que a equação não possui raízes reais.
3. Usar a fórmula de Bhaskara para calcular as raízes (caso existam) e
imprimir na tela tais raízes:
    Raiz 1: (-b + √Δ) / (2a)
    Raiz 2: (-b - √Δ) / (2a)
*/

let a = parseFloat(prompt("Digite o coeficiente a:"));
let b = parseFloat(prompt("Digite o coeficiente b:"));
let c = parseFloat(prompt("Digite o coeficiente c:"));

if (a === 0) {
    alert("O coeficiente 'a' deve ser diferente de zero.");
}
else{
    let delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(
            "A equação possui duas raízes reais e distintas:\n" +
            "Raiz 1: " + raiz1.toFixed(2) + "\n" +
            "Raiz 2: " + raiz2.toFixed(2)
        );
    } else if (delta === 0) {
        let raiz = -b / (2 * a);
        alert(
            "A equação possui uma raiz real (raiz dupla):\n" +
            "Raiz: " + raiz.toFixed(2)
        );
    } else {
        alert("A equação não possui raízes reais.");
    }
}