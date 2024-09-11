// 1. No array abaixo qual o número que pega a Ferrari?
// Array:
let carros = ['BMW', 'Ferrari', 'Mercedes'];
// Resposta: 
console.log(carros[1]);

// 2. Troque a Ferrari por Audi
// Resposta: 
carros[1] = 'Audi';
console.log(carros);

// 3. Adicione o Volvo na lista
// Resposta: 
carros.push('Volvo');
console.log(carros);

// 4. Exiba quantos itens tem no array
// Resposta: 
console.log(`Quantidade de itens no array carros: ${carros.length}`);