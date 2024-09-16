// 1. Faça um loop que mostre todas as frutas 
let fruits = ["Maça", "Uva", "Banana"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
};

// Versão resumida:

for (let i in fruits) {
    console.log(fruits[i])
};

// 2. Conte de 1 até 100 através de um WHILE
let number = 1;

while (number <= 100) {
    console.log(number);
    number++;
}; 