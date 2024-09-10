/* 
1. Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
Uso da função:
*/

// Resposta: 

function calcPorcentagem(n1, n2) {
    return (n1 / n2) * 100;
}

let x = 40;
let y = 10;
let porcentagem = calcPorcentagem (x, y);
console.log(`${porcentagem}% de ${x} é ${y}`);