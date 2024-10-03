/* 
Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
*/

let numeroSorteado = Math.floor(Math.random() * 11);
let tentativas = 2;

let numeroDigitado = parseInt(prompt("Digite um número entre 0 a 10."));

while (tentativas > 0 && numeroDigitado !== numeroSorteado) {
    tentativas--;
    if (tentativas > 0) {
        alert("Infelizmente, você não acertou.");
        numeroDigitado = parseInt(prompt("Digite um número entre 0 a 10."));
    }
}

if (numeroDigitado === numeroSorteado) {
    alert("Parabéns!!! Você acertou o número.");
} else {
    alert(`Você perdeu! O número sorteado era ${numeroSorteado}.`);
}


/* 
FORMA MELHOR DE ESCREVER ESSE CÓDIGO: 

let numeroSorteado = Math.floor(Math.random() * 11);
let tentativas = 2;

while (tentativas > 0) {
    let numeroDigitado = parseInt(prompt(`Você tem ${tentativas} tentativa(s). Digite um número entre 0 e 10:`), 10);
    
    if (numeroDigitado === numeroSorteado) {
        alert("Parabéns!!! Você acertou o número.");
        break;  // Sai do loop quando o número é acertado
    } else {
        tentativas--;
        if (tentativas > 0) {
            alert("Infelizmente, você não acertou. Tente novamente.");
        }
    }
}

if (tentativas === 0) {
    alert(`Você perdeu! O número sorteado era ${numeroSorteado}.`);
}


*/