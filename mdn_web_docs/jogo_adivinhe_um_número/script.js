let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector(".palpites");
let ultimoResultado = document.querySelector(".ultimoResultado");
let baixoOuAlto = document.querySelector(".baixoOuAlto");

let envioPalpite = document.querySelector(".envioPalpite");
let campoPalpite = document.querySelector(".campoPalpite");

let contagemPalpites = 1;
let botaoReinicio; 

function conferirPalpite() {
    let palpiteUsuario = Number(campoPalpite.value);
    palpites.textContent += palpiteUsuario + " / ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!";
        ultimoResultado.classNameList.add(
            "bg-green-500",
            "text-center",
            "text-black",
            "p-3"
        );
        baixoOuAlto.textContent = "";
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
        baixoOuAlto.textContent = "";
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = "Errado!";
        ultimoResultado.classNameList.add(
            "bg-red-500",
            "text-center",
            "text-white",
            "p-3"
        );
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito baixo!";
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito alto!";
        }
    }

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

envioPalpite.addEventListener("click", conferirPalpite);

function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;

    const mainElement = document.getElementById('main-content');
    botaoReinicio = document.createElement("button");  
    botaoReinicio.textContent = "Iniciar novo jogo";
    botaoReinicio.classNameList.add(
        "bg-blue-500",
        "p-3",
        "text-white",
        "hover:bg-blue-600", 
        "focus:outline-none", 
        "focus:ring-2", 
        "focus:ring-blue-500"
    );

    mainElement.appendChild(botaoReinicio);

    botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;

    palpites.textContent = "";  
    ultimoResultado.textContent = "";
    ultimoResultado.classNameName = '';
    baixoOuAlto.textContent = "";  

    if (botaoReinicio) {  
        botaoReinicio.remove(); 
    }

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
