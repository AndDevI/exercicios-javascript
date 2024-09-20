/*Reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
} */

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
    console.log(`As variáveis numeroUm = ${numeroUm} e stringUm = ${stringUm} tem o mesmo valor, mas tipos diferentes numeroUm sendo = ${typeof numeroUm} e stringUm sendo = ${typeof stringUm}.`);
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
};

if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
};

if (numeroDez == stringDez) {
    console.log(`As variáveis numeroDez = ${numeroUm} e stringDez = ${stringUm} tem o mesmo valor, mas tipos diferentes numeroDez sendo = ${typeof numeroUm} e stringDez sendo = ${typeof stringUm}.`);
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
};
