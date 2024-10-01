/* 
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
*/

const areaDeProgramacao = prompt('Qual área você gostaria de seguir "Front-end ou "Back-end", digite uma das alternativas.');
let linguagem = "";

if (areaDeProgramacao === 'Front-end') {
    linguagem = prompt('Qual linguagem de Front-end você quer aprender: React ou Vue?')
} else if (areaDeProgramacao === 'Back-end') {
    linguagem = prompt('Qual linguagem de Back-end você quer aprender: C# ou Java?')
} else {
    alert('Você digitou um valor não válido!')
};

const especializar = prompt('Digite 1 caso queira se especializar na área escolhida ou digite 2 para ser um Dev FullStack')

if (especializar == '1') {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${areaDeProgramacao}!`);
} else if (especializar == '2' && areaDeProgramacao === 'Front-end') {
    alert(`Além de ${linguagem} aprenda também linguagens do Back-and como por exemplo o C# ou Java para se tornar Fullstack!`);
} else if (especializar == '2' && areaDeProgramacao === 'Back-end') {
    alert(`Além de ${linguagem} aprenda também linguagens do Front-and como por exemplo o React ou Vue para se tornar Fullstack!`);
} else {
    alert('Você digitou um valor não válido!')
}

let responder = prompt("Existe mais alguma tecnologia que você gostaria de aprender ou se expecializar? Digite 'Sim' em caso positivo ou 'Não' em caso negativo.");
if (responder === "Sim") {
    while (responder === "Sim"){
        let novaTecnologia = prompt("Qual?");
        alert(`${novaTecnologia}, boa escolha!!`)
        responder = prompt("Existe mais alguma tecnologia que você gostaria de aprender ou se expecializar? Digite 'Sim' em caso positivo ou 'Não' em caso negativo.");
    }
} else if (responder === "Não") {
    alert(`Faça seu melhor na área de ${areaDeProgramacao}!`)
} else {
    alert('Você digitou um valor não válido!')
}
