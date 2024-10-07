/* 
Lembra de ontem, que criamos um programinha para montar a nossa própria lista de compras? Pois é, hoje nosso desafio é deixar ele ainda mais legal!

Você deverá criar a opção de deletar algum item da lista, que será exibida junto à pergunta de você deseja adicionar uma comida na lista de compra? A partir daí, o programa irá imprimir os elementos presentes na lista atual e a pessoa deverá escrever qual deles deseja retirar Depois disso, o programa irá deletar o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá Por fim, ele voltará para o seu ciclo de perguntas inicial.
*/

let fruits = [], dairy = [], candy = [], others = [];
let listaCompleta = [];

function adicionarItem(item, categoria) {
    switch (categoria) {
        case '1':
            fruits.push(item);
            break;
        case '2':
            candy.push(item);
            break;
        case '3':
            dairy.push(item);
            break;
        default:
            others.push(item);
    }
}

function removerItens() {
    let remover = prompt("Deseja remover algum item? (sim/não)");

    while (remover.toLowerCase() === 'sim' && listaCompleta.length > 0) {
        let numberItem = prompt(listaCompleta.join(', ') + "\nDigite a posição do item que deseja remover (começando pelo 0):");
        if (numberItem >= 0 && numberItem < listaCompleta.length) {
            listaCompleta.splice(numberItem, 1); 
        } else {
            alert("Posição inválida.");
        }
        remover = prompt("Deseja remover outro item? (sim/não)");
    }

    if (listaCompleta.length === 0) {
        alert("A lista está vazia.");
    }
}

let continuar = true;

while (continuar) {
    let resposta = prompt("Deseja adicionar um item à lista de compras? (sim/não)");

    if (resposta.toLowerCase() === 'sim') {
        let item = prompt("Qual item deseja adicionar?");
        let categoria = prompt("Ele faz parte de qual categoria: 1.Frutas / 2.Doces / 3.Laticínios / 4.Outros?");
        adicionarItem(item, categoria);
        listaCompleta = fruits.concat(dairy, candy, others);
    } else if (resposta.toLowerCase() === 'não') {
        let desejaRemover = prompt("Deseja remover algum item antes de finalizar? (sim/não)");
        if (desejaRemover.toLowerCase() === 'sim') {
            removerItens(); 
        }
        continuar = false; 
    }
}

alert("Lista de compras final: " + listaCompleta.join(', '));

