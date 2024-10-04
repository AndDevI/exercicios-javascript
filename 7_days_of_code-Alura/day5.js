/* 
Para facilitar a sua ida ao supermercado, você irá criar um programa em Javascript, onde ele perguntará se você deseja adicionar uma comida na lista de compras para você responder com sim ou nao. Em seguida perguntará qual comida você deseja inserir e você digitará o nome dela, como por exemplo batata. Em seguida, ele deverá perguntar em qual categoria essa comida se encaixa, com opções já pré definidas, como laticínios, congelados, doces e o que mais achar interessante, assim poderá separar tudo no seu devido grupo Por fim, caso você não queira mais adicionar nada na lista de compras e responder nao na primeira pergunta, ele irá imprimir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista: banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras: banana, tomate, maçã, uva, abacate, leite em pó, leite vegetal, leite de vaca, chiclete e bala de ursinho
*/

let fruits = [], dairy = [], candy = [], others = [];

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

function exibirLista() {
    let listaCompleta = fruits.concat(dairy, candy, others);
    alert("Lista de compras: " + listaCompleta.join(', '));
}

let continuar = true;

while (continuar) {
    let resposta = prompt("Deseja adicionar um item à lista de compras? (sim/não)"); 
    
    if (resposta.toLowerCase() === 'sim') {
        let item = prompt("Qual item deseja adicionar?");
        let categoria = prompt("Ele faz parte de qual categoria: 1.Frutas / 2.Doces / 3.Laticínios / 4.Outros?");
        adicionarItem(item, categoria); 
    } else {
        continuar = false;
    }
}

exibirLista();
