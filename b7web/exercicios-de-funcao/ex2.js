/* 
2. Calcule o preço do imóvel
- m2 = 3000
- Se tiver 1 quarto. o m2 é 1x
- Se tiver 2 quartos. o m2 é 1.2x
- Se tiver 3 quartos. o m2 é 1.5x
Uso da função:
*/

// Resposta: 

let quantidadeQuartos = 1;
let metragem = 123

function calcularValorImovel(metragem, quantidadeQuartos) {
    let valorImovel = 0;
    let metroQuadrado = 3000;

    switch(quantidadeQuartos) {
        case 1:
            valorImovel = metragem * metroQuadrado;
            break;

        case 2:
            valorImovel = metragem * (metroQuadrado * 1.2);
            break;

        case 3:
            valorImovel = metragem * (metroQuadrado * 1.5);
            break;
        
        default: 
            valorImovel = metragem * (metroQuadrado * 2);
            break;
    }

    return valorImovel;
}

let valorImovel = calcularValorImovel(metragem, quantidadeQuartos);
console.log(`A casa custa R$ ${valorImovel}`);

/* 
Forma resumida desse código:

let quantidadeQuartos = 4; 
let metragem = 123;

function calcularValorImovel(metragem, quantidadeQuartos) {
    const metroQuadrado = 3000;
    const multiplicador = quantidadeQuartos === 1
        ? 1
        : quantidadeQuartos === 2
        ? 1.2
        : quantidadeQuartos === 3
        ? 1.5
        : 2; 

    return metragem * metroQuadrado * multiplicador;
}

let valorImovel = calcularValorImovel(metragem, quantidadeQuartos);
console.log(`A casa custa R$ ${valorImovel}`);

*/